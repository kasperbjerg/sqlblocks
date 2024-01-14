import { useState } from 'react';
import { useEffect } from 'react';
import sqlite3InitModule from '@sqlite.org/sqlite-wasm';

function Sql({ text }) {
  const log = (...args) => console.log(...args);
  const error = (...args) => console.error(...args);

  useEffect(() => {
    text
  }, []);

  return (
    <div>
      <h1>
        {text}
      </h1>
    </div>
  );
}

export default Sql;
