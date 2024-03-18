import { useState, useEffect, useRef } from 'react';

import sqlite3InitModule from '@sqlite.org/sqlite-wasm';

import { useLocalStorage } from '@uidotdev/usehooks';

export default function Sql({
  sqlCode,
  result,
  handleResultChange,
  tableInfo,
  handleTableInfoChange,
}) {
  const log = (...args) => console.log(...args);
  const error = (...args) => console.error(...args);
  const [energyPoints, setEnergyPoints] = useLocalStorage('energyPoints', 0);

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

        //array with table-names
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

        //fills the tablesInfo array
        //
        let tableInfoRows = [];
        tabelsArray.map((table) => {
          // maps over the tabelsArray
          let rows = [];
          rows.push(table);
          const sql1 = `select count(*)
          from '{}'`.replace('{}', table);
          db.exec({
            sql: sql1,
            rowMode: 'array',
            callback: function (row) {
              rows.push(row[0] + ' rækker');
            },
          });

          const sql = `select name,type, iif(pk=1, '(PK)', '') as pk
          from pragma_table_info('{}')`.replace('{}', table);
          db.exec({
            sql: sql,
            rowMode: 'array',
            resultRows: rows,
          });
          tableInfoRows.push(rows);
        });
        handleTableInfoChange(tableInfoRows);
        //setEnergyPoints(energyPoints + 2);
      } finally {
        db.close();
      }
    };

    log('Loading and initializing SQLite3 module...');
    sqlite3InitModule({
      print: log,
      printErr: error,
    }).then((sqlite3) => {
      //log('Done initializing. Running demo...');
      try {
        start(sqlite3);
      } catch (err) {
        handleResultChange([]);
        handleTableInfoChange([]);
        //error(err.name, err.message);
      }
    });
  }, [sqlCode]);

  //Functions to fill the database scema tables
  //Creates at table for each element in the array
  function createTables(data) {
    if (data.length === 0) {
      return;
    }
    return data.map((table) => {
      return (
        <div className="pr-2 pt-2">
          <table className="rounded-lg border border-[0.5px] border-[#bbbbbb]">
            <thead className=" border-[0.5px] border-[#bbbbbb] bg-[#e4e4e4]">
              <th className="">{table[0]}</th>
              <th>({table[1]})</th>
              <th></th>
            </thead>
            <tbody>{column_data(table)}</tbody>
          </table>
        </div>
      );
    });
  }

  //slices the tableInfoArray and maps over
  // the column-data
  function column_data(data) {
    if (data.length === 0) {
      return;
    }
    return data.slice(2).map((column) => {
      return (
        <tr className="border border-[0.5px] border-[#bbbbbb]">
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
    if (data.length === 0) {
      return;
    }
    return Object.keys(data[0]).map((key) => {
      return (
        <th className="border border-[0.5px] border-[#bbbbbb] bg-[#e4e4e4]">
          {key}
        </th>
      );
    });
  }

  // `map` over the data to return
  // row data, passing in each mapped object
  // to `getCells`
  function getRows(data) {
    if (data.length === 0) {
      return;
    }
    return data.map((obj) => {
      return (
        <tr className="border border-[0.5px] border-[#bbbbbb]">
          {getCells(obj)}
        </tr>
      );
    });
  }

  // Return an array of cell data using the
  // values of each object
  function getCells(obj) {
    return Object.values(obj).map((value) => {
      return (
        <td className="border border-[0.5px] border-[#bbbbbb]" key={value}>
          {value}
        </td>
      );
    });
  }

  return (
    <div className="flex h-[560px] w-[426px] flex-col overflow-auto border-[0.5px] border-[#bbbbbb] pl-2 pr-2">
      <div>
        <h1 className="text-left text-xl text-zinc-400">Databaseskema</h1>
        <div className="flex flex-row flex-wrap text-left">
          {createTables(tableInfo)}
        </div>
      </div>
      <div className="pt-2">
        <h1 className="text-left text-xl text-zinc-400">Resultat</h1>
        <div className="">
          <table className="gap-4 border border-[0.5px] border-[#bbbbbb] text-left">
            <thead className="border border-[0.5px] border-[#bbbbbb]">
              {getHeadings(result)}
            </thead>
            <tbody className="border border-[0.5px] border-[#bbbbbb]">
              {getRows(result)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
