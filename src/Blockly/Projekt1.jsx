import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

import { useLocalStorage } from '@uidotdev/usehooks';

export default function Projekt1({}) {
  const [sqlCode, setSqlCode] = useState('');
  const handleSqlCodeChange = (e) => setSqlCode(e);

  const [result, setResult] = useState([]);
  const handleResultChange = (e) => setResult(e);

  const [tableInfo, setTableInfo] = useState([]);
  const handleTableInfoChange = (e) => setTableInfo(e);

  const [isComplete, setIsComplete] = useLocalStorage(
    'projekt1Complete',
    false,
  );

  //conditions for setting exercise to complete
  React.useEffect(() => {
    typeof sqlCode != 'undefined' &&
    sqlCode.includes('CREATE TABLE hunde') &&
    sqlCode.includes('navn TEXT') &&
    sqlCode.includes('alder INTEGER') &&
    sqlCode.includes('ejer TEXT') &&
    sqlCode.includes('Plet') &&
    sqlCode.includes('Trofast') &&
    sqlCode.includes('5') &&
    sqlCode.includes('12') &&
    sqlCode.includes('Balder') &&
    sqlCode.includes('15') &&
    JSON.stringify(tableInfo).charAt(
      JSON.stringify(tableInfo).search(',') + 1,
    ) > 4
      ? setIsComplete(true)
      : '';
  }, [result]);

  return (
    <>
      <div className="relative top-2 col-span-5">
        <p className="text-1xl">
          Fri leg!!
        </p>
        <br></br>
        <br></br>
        {/* text-teal-700/75 */}
        {/* text-sky-800/75 */}
        <p className="text-bold absolute animate-bounce text-2xl font-bold text-teal-700/75">
          {isComplete ? 'SÅDAN!.. godt arbejde :)' : ''}
        </p>
        <BlocklyComponent
          localStorageKey={'projekt1Workspace'}
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
              horizontal: true,
              vertical: true,
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
          <Block type="insert_into" />
          <Block type="select_*" />
        </BlocklyComponent>
      </div>
    </>
  );
}
