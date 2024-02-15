/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blockly React Component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import './BlocklyComponent.css';
import { useState, useEffect, useRef } from 'react';

import Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import locale from 'blockly/msg/en';
import 'blockly/blocks';

import sqlite3InitModule from '@sqlite.org/sqlite-wasm';

Blockly.setLocale(locale);

export default function BlocklyComponent(props) {
  const blocklyDiv = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();
  const [sqlCode, setSqlCode] = useState('');

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    let workspace = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.utils.xml.textToDom(initialXml),
        workspace,
      );
    }

    /*
    const supportedEvents = new Set([
      Blockly.Events.BLOCK_CHANGE,
      Blockly.Events.BLOCK_CREATE,
      Blockly.Events.BLOCK_DELETE,
      Blockly.Events.BLOCK_MOVE,
    ]);
    */

    function updateCode(event) {
      if (workspace.isDragging()) return; // Don't update while changes are happening.
      //if (!supportedEvents.has(event.type)) return; Error

      let code = javascriptGenerator.workspaceToCode(workspace);
      // Add a preamble and a postscript to the code.
      code = `

        ${code}

      `;
      return code;
    }

    workspace.addChangeListener(() => setSqlCode(updateCode));
    workspace.addChangeListener(Blockly.Events.disableOrphans);
  }, [toolbox, blocklyDiv]);

  return (
    <>
      <div className="relative top-12 grid grid-cols-2 gap-4 text-center">
        <div className="">
          <div ref={blocklyDiv} id="blocklyDiv" />
          <div style={{ display: 'none' }} ref={toolbox}>
            {props.children}
          </div>
        </div>
        <div className="">
          {sqlCode}
          <p>Nedenfor er output</p>
          <Sql sqlCode={sqlCode} />
        </div>
      </div>
    </>
  );
}

// The sqlite3 funcion:
function Sql({ sqlCode }) {
  const log = (...args) => console.log(...args);
  const error = (...args) => console.error(...args);
  const [resultRows, setResultRows] = useState([]);
  // array of tables in the database
  const [dbTables, setDbTables] = useState([]);
  // array of tables with info in the database
  const [dbTableInfo, setDbTableInfo] = useState([]);

  useEffect(() => {
    const start = function (sqlite3) {
      log('Running SQLite3 version', sqlite3.version.libVersion);
      const db = new sqlite3.oo1.DB('/mydb.sqlite3', 'ct');
      log('Created transient database', db.filename);

      try {
        //Executes sqlCode generated from blockly
        let resultRows1 = [];
        db.exec({
          sql: sqlCode,
          rowMode: 'object',
          resultRows: resultRows1,
        });
        setResultRows(resultRows1);
        console.log(JSON.stringify(resultRows));

        //fills the dbTables array
        let tableRows = [];
        db.exec({
          sql: `select name as "table" from sqlite_schema
                where type = 'table'
                and name not like 'sqlite_%'
                and name not like 'sqlean_%'`,
          rowMode: 'array',
          resultRows: tableRows,
        });
        let tabelsArray = [];
        tabelsArray = tableRows.map((row) => row[0]);
        setDbTables(tabelsArray);

        //fills the dbTablesInfo array
        //
        let tableInfoRows = [];
        dbTables.map((table) => {
          let rows = [];
          rows.push(table);
          const sql1 = `select count(*)
          from '{}'`.replace('{}', table);
          db.exec({
            sql: sql1,
            rowMode: 'array',
            callback: function (row) {
              rows.push(row[0]);
            },
          });

          const sql = `select name, iif(pk=1, '(PK)', '') as pk,type
          from pragma_table_info('{}')`.replace('{}', table);
          db.exec({
            sql: sql,
            rowMode: 'array',
            resultRows: rows,
          });
          tableInfoRows.push(rows);
        });
        setDbTableInfo(tableInfoRows);
        console.log(JSON.stringify(dbTableInfo));
      } finally {
        db.close();
      }
    };

    log('Loading and initializing SQLite3 module...');
    sqlite3InitModule({
      print: log,
      printErr: error,
    }).then((sqlite3) => {
      log('Done initializing. Running demo...');
      try {
        start(sqlite3);
      } catch (err) {
        error(err.name, err.message);
      }
    });
  }, [sqlCode]);

  //Functions to fill the database scema tables
  //Creates at table for each element in the array
  function createTables(data) {
    if (data.length == 0) {
      return;
    }
    return data.map((table) => {
      return (
        <table className="border">
          <thead className="border">
            <th>{table[0]}</th>
          </thead>
          <tbody>
            <tr>
              <td>rækker: {table[1]}</td>
            </tr>
            {column_data(table)}
          </tbody>
        </table>
      );
    });
  }

  //slices the dbTableInfoArray and maps over
  // the column-data
  function column_data(data) {
    if (data.length == 0) {
      return;
    }
    return data.slice(2).map((column) => {
      return (
        <tr>
          <td>{column[0]}</td>
          <td>{column[1]}</td>
          <td>{column[2]}</td>
        </tr>
      );
    });
  }

  //Functions to fill the result table
  // `map` over the first object in the array
  // and get an array of keys and add them
  // to TH elements
  function getHeadings(data) {
    if (data.length == 0) {
      return;
    }
    return Object.keys(data[0]).map((key) => {
      return <th>{key}</th>;
    });
  }

  // `map` over the data to return
  // row data, passing in each mapped object
  // to `getCells`
  function getRows(data) {
    if (data.length == 0) {
      return;
    }
    return data.map((obj) => {
      return <tr>{getCells(obj)}</tr>;
    });
  }

  // Return an array of cell data using the
  // values of each object
  function getCells(obj) {
    return Object.values(obj).map((value) => {
      return <td>{value}</td>;
    });
  }

  return (
    <div>
      <h1 className="text-left">Databaseskema</h1>
      <div className="grid auto-cols-max grid-flow-col gap-4">
        {createTables(dbTableInfo)}
      </div>
      <h1 className="text-left">Resultat</h1>
      <table class="border">
        <thead class="border">{getHeadings(resultRows)}</thead>
        <tbody>{getRows(resultRows)}</tbody>
      </table>
    </div>
  );
}
