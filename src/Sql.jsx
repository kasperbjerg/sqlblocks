import { useState } from 'react';
import { useEffect } from 'react';
import sqlite3InitModule from '@sqlite.org/sqlite-wasm';

function Sql() {

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
        db.exec('DROP TABLE IF EXISTS t');
        db.exec('CREATE TABLE IF NOT EXISTS t(navn TEXT, antal INTEGER)');
        db.exec({
          sql: 'INSERT INTO t(navn,antal) VALUES (?,?)',
          bind: ["Nutella", 2],
        });

        db.exec({
          sql: 'INSERT INTO t(navn,antal) VALUES (?,?)',
          bind: ["Smør", 3],
        });
        
        log('Query data with exec()...');
        db.exec({
          sql: 'SELECT navn,antal FROM t ORDER BY antal',
          callback: (result) => {
            setResultRows(resultRows => [...resultRows, JSON.stringify(result)]);
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
  }, []);
  
  return (
    <div className="bg-blue-200 round">
      <h1>{resultRows}</h1>
    </div>
  );
}

export default Sql