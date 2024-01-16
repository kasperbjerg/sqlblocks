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
 * @fileoverview Define generation methods for custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on generating code:
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

import { javascriptGenerator } from 'blockly/javascript';

javascriptGenerator.forBlock['test_react_field'] = function (block) {
  return "console.log('custom block');\n";
};

javascriptGenerator.forBlock['test_react_date_field'] = function (block) {
  return 'console.log(' + block.getField('DATE').getText() + ');\n';
};

javascriptGenerator.forBlock['sql'] = function (block, generator) {
  const log = (...args) => console.log(...args);
  const error = (...args) => console.error(...args);

  let code = ('Hejsa fra Blocks!');
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
        bind: ['Nutella', 2],
      });

      db.exec({
        sql: 'INSERT INTO t(navn,antal) VALUES (?,?)',
        bind: ['Smør', 3],
      });

      log('Query data with exec()...');
      db.exec({
        sql: 'SELECT navn,antal FROM t ORDER BY antal',
        callback: (row) => {
          log(row);
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
  return code;
};

javascriptGenerator.forBlock['sql2'] = function (block, generator) {
  const log = (...args) => console.log(...args);
  const error = (...args) => console.error(...args);

  let code = 'Hejsa fra Blocks!';
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
        bind: ['Danskvand', 51],
      });

      db.exec({
        sql: 'INSERT INTO t(navn,antal) VALUES (?,?)',
        bind: ['Cola', 3],
      });

      log('Query data with exec()...');
      db.exec({
        sql: 'SELECT navn,antal FROM t ORDER BY antal',
        callback: (row) => {
          log(row);
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
  return code;
};
