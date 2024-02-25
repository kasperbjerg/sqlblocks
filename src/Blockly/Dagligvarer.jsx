import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

export default function Dagligvarer({}) {
  const [sqlCode, setSqlCode] = useState('');
  const handleSqlCodeChange = (e) => setSqlCode(e);

  const [result, setResult] = useState([]);
  const handleResultChange = (e) => setResult(e);

  const [tableInfo, setTableInfo] = useState([]);
  const handleTableInfoChange = (e) => setTableInfo(e);
  return (
    <>
      <div className="relative top-2 col-span-4">
        <p className="text-1xl">
          Lav en tabel der hedder personer som har én TEXT kolonne der hedder
          navn {tableInfo.length}
        </p>
        <p>
          {tableInfo.length !== 0 && tableInfo[0][0] == 'personer'
            ? 'Jeps.. godt arbejde!'
            : 'Du har ikke løst opgaven endnu.. kæmp bare videre'}
        </p>
        <BlocklyComponent
          sqlCode={sqlCode}
          handleSqlCodeChange={handleSqlCodeChange}
          result={result}
          handleResultChange={handleResultChange}
          tableInfo={tableInfo}
          handleTableInfoChange={handleTableInfoChange}
          readOnly={false}
          trashcan={false}
          media={'media/'}
          move={{
            scrollbars: {
              horizontal: false,
              vertical: false,
            },
            drag: true,
            wheel: true,
          }}
          initialXml={`
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `}
        >
          <Block type="create_table" />
          <Block type="add_integer_column" />
          <Block type="add_text_column" />
          <Block type="add_real_column" />
          <Block type="insert_into" />
          <Block type="select_*" />
          <Block type="select" />
        </BlocklyComponent>
      </div>
    </>
  );
}
