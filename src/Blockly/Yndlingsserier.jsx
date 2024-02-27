import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

import { useLocalStorage } from '@uidotdev/usehooks';

export default function Yndlingsserier({}) {
  const [sqlCode, setSqlCode] = useState('');
  const handleSqlCodeChange = (e) => setSqlCode(e);

  const [result, setResult] = useState([]);
  const handleResultChange = (e) => setResult(e);

  const [tableInfo, setTableInfo] = useState([]);
  const handleTableInfoChange = (e) => setTableInfo(e);

  const [isComplete, setIsComplete] = useLocalStorage(
    'yndlingsserierComplete',
    false,
  );

  const [reset, setReset] = useState(false);

  React.useEffect(() => {
    JSON.stringify(result) == '[{"alder":42}]' ? setIsComplete(true) : '';
  }, [result]);

  return (
    <>
      <div className="relative top-2 col-span-5">
        <p className="text-1xl">
          Tilføj nu mindst 3 reality-serier du kender til tabellen.
        </p>
        <p>
          Skriv navnet på serien i <b>serie</b>-kolonnen og giv også hver serie
          en <b>rating</b> mellem 1 og 5.
        </p>
        <p>
          Se din tabel med <b>SELECT *</b> til sidst.
        </p>
        <p className="text-orange-500">
          Hint: Husk at sætte ' ' omkring serie-navnet.{' '}
          <button onClick={() => setReset(true)}>du kan resette her</button>
        </p>
        {/* text-teal-700/75 */}
        {/* text-sky-800/75 */}
        <p className="text-bold absolute animate-bounce text-2xl font-bold text-teal-700/75">
          {isComplete ? 'Wauw.. du er en champ!' : ''}
        </p>
        <BlocklyComponent
        reset={reset}
          localStorageKey={'yndlingsserierWorkspace'}
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
              <block type="run_sqlblocks">
                <next>
                <block type="create_table">
                  <field name="NAME">serier</field>
                    <statement name="NAME">
                      <block type="add_text_column">
                        <field name="NAME">serie</field>
                        <next>
                          <block type="add_integer_column">
                            <field name="NAME">rating</field>
                          </block>
                        </next>
                      </block>
                    </statement>
                </next>
              </block>  
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
