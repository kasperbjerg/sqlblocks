import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

import { useLocalStorage } from '@uidotdev/usehooks';

export default function Reality({}) {
  const [sqlCode, setSqlCode] = useState('');
  const handleSqlCodeChange = (e) => setSqlCode(e);

  const [result, setResult] = useState([]);
  const handleResultChange = (e) => setResult(e);

  const [tableInfo, setTableInfo] = useState([]);
  const handleTableInfoChange = (e) => setTableInfo(e);

  const [isComplete, setIsComplete] = useLocalStorage('realityComplete', false);

  //conditions for setting exercise to complete
  React.useEffect(() => {
    typeof sqlCode != 'undefined' &&
    sqlCode.includes('CREATE TABLE serier') &&
    sqlCode.includes('serie TEXT, rating INTEGER')
      ? setIsComplete(true)
      : '';
  }, [result]);

  return (
    <>
      <div className="relative top-2 col-span-5">
        <p className="text-1xl">
          Ser du reality-programmer? I de næste øvelser skal du lave en tabel
          til dine yndlingsserier.
          
        </p>
        <p>
          Opret en tabel der hedder <b>serier</b> tilføj to kolonner.
        </p>
        <p>
          Den første kolonne skal have typen <b>TEXT</b> og hedde <b>serie</b>.
        </p>
        <p>
          Anden kolonne skal have typen <b>INTEGER</b> og hedde <b>rating</b>.
        </p>
        {/* text-teal-700/75 */}
        {/* text-sky-800/75 */}
        <p className="text-bold absolute animate-bounce text-2xl font-bold text-teal-700/75">
          {isComplete ? 'SÅDAN!.. godt arbejde :)' : ''}
        </p>
        <BlocklyComponent
          localStorageKey={'realityWorkspace'}
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
        </BlocklyComponent>
      </div>
    </>
  );
}
