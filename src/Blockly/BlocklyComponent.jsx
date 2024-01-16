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

  /*
  const generateCode = () => {
    var code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
    console.log(code);
    return code;
  };
  */

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
      //if (workspace.isDragging()) return; // Don't update while changes are happening.
      //if (!supportedEvents.has(event.type)) return; Error

      let code = javascriptGenerator.workspaceToCode(workspace);
      // Add a preamble and a postscript to the code.
      code = `

        ${code}

      `;
      return code;
    }

    workspace.addChangeListener(() => setSqlCode(updateCode));
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

  useEffect(() => {
    const start = function (sqlite3) {
      log('Running SQLite3 version', sqlite3.version.libVersion);
      const db = new sqlite3.oo1.DB('/mydb.sqlite3', 'ct');
      log('Created transient database', db.filename);

      try {
        log('', 'Creating a table...');
        //db.exec('DROP TABLE IF EXISTS t');
        db.exec(sqlCode);
        //db.exec('CREATE TABLE IF NOT EXISTS t(navn TEXT, antal INTEGER)');

        db.exec({
          sql: 'INSERT INTO t(navn,antal) VALUES (?,?)',
          bind: ['Nutella', 2],
        });

        db.exec({
          sql: 'INSERT INTO t(navn,antal) VALUES (?,?)',
          bind: ['smør', 3],
        });

        log('Query data with exec()...');
        db.exec({
          sql: 'SELECT navn,antal FROM t ORDER BY antal',
          callback: (result) => {
            setResultRows((resultRows) => [
              ...resultRows,
              JSON.stringify(result),
            ]);
          },
        });
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

  return (
    <div>
      <h1>{resultRows}</h1>
    </div>
  );
}
