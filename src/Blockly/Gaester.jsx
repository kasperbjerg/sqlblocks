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

  const [hundeXml, sethundeXml] = useLocalStorage('hundeWorkspace', false);

  const [reset, setReset] = useState(false);

  //conditions for setting exercise to complete
  React.useEffect(() => {
    typeof sqlCode != 'undefined' &&
    sqlCode.includes('CREATE TABLE kæledyr') &&
    sqlCode.includes('Nuser') &&
    sqlCode.includes('Thea') &&
    sqlCode.includes('Rasmus') &&
    sqlCode.includes('Plet')
      ? setIsComplete(true)
      : '';
  }, [result]);

  return (
    <>
      <div className="relative top-2 col-span-5">
        <p className="text-1xl">
          Din sql-kode fra sidste opgave er nedenfor. (Hvis ikke så skal du lige{' '}
          <button
            className="text-teal-700 underline"
            onClick={() => setReset(true)}
          >
            klikke her
          </button>
          )
        </p>
        <p>
          Anne har hørt om projektet og vil være med, men hun er mere til katte
          så foreslår at tabellen skal hedde <b>kæledyr</b>.{' '}
        </p>
        <p>
          Hun også have med hvor mange gange dyrene skal fodres og har selv
          Nuser på 7 år som skal fodres 3 gange.
        </p>
        <p>
          Thea, hendes veninde, har 1-årige Rasmus. Tilpas tabellen og find selv
          på hvis du mangler oplysninger.
        </p>
        <p className="text-bold absolute animate-bounce text-2xl font-bold text-purple-900/75">
          {isComplete ? 'Fantastisk' : ''}
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
          initialXml={hundeXml}
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
