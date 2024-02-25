import { useState, useEffect, useRef } from 'react';

import sqlite3InitModule from '@sqlite.org/sqlite-wasm';

export default function Sql({
  sqlCode,
  result,
  handleResultChange,
  tableInfo,
  handleTableInfoChange,
}) {
  const log = (...args) => console.log(...args);
  const error = (...args) => console.error(...args);
  // array of tables in the database
  const [dbTables, setDbTables] = useState([]);

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
        handleResultChange(resultRows1);

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

        //fills the tablesInfo array
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
        handleTableInfoChange(tableInfoRows);
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
            <th className="text-left">{table[0]}</th>
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

  //slices the tableInfoArray and maps over
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
      return <td key={value}>{value}</td>;
    });
  }

  return (
    <div>
      <h1 className="text-left">Databaseskema</h1>
      <div className="grid auto-cols-max grid-flow-col">
        {createTables(tableInfo)}
      </div>
      <h1 className="text-left">Resultat</h1>
      <table className="border">
        <thead className="border">{getHeadings(result)}</thead>
        <tbody>{getRows(result)}</tbody>
      </table>
    </div>
  );
}
