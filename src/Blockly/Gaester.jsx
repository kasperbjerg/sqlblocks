import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

import { useLocalStorage } from '@uidotdev/usehooks';

export default function Gaester({}) {
  const [sqlCode, setSqlCode] = useState('');
  const handleSqlCodeChange = (e) => setSqlCode(e);

  const [result, setResult] = useState([]);
  const handleResultChange = (e) => setResult(e);

  const [tableInfo, setTableInfo] = useState([]);
  const handleTableInfoChange = (e) => setTableInfo(e);

  const [isComplete, setIsComplete] = useLocalStorage('gaesterComplete', false);

  const [reset, setReset] = useState(false);

  React.useEffect(() => {
    JSON.stringify(result) == '[{"alder":42}]' ? setIsComplete(true) : '';
  }, [result]);

  return (
    <>
      <div className="relative top-2 col-span-5">
        <p className="text-1xl">
          Lav en tabel med navnet tabel og tilføj en INTEGER-kolonne der hedder
          alder, indsæt 42 og SELECT * til sidst{' '}
          <button onClick={() => setReset(true)}>
            Klik her for at resette
          </button>
        </p>

        <br></br>
        {/* text-teal-700/75 */}
        {/* text-sky-800/75 */}
        <p className="text-bold absolute animate-bounce text-2xl font-bold text-teal-700/75">
          {isComplete ? 'SÅDAN!.. godt arbejde :)' : ''}
        </p>
        <BlocklyComponent
          reset={reset}
          localStorageKey={'gaesterWorkspace'}
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
