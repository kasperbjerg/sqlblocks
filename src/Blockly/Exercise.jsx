import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

import { useLocalStorage } from '@uidotdev/usehooks';

export default function Exercise({
  complete,
  workspace,
  description,
  feedbackText,
  nextButtonColor,
  completeConditionsSql,
  completeConditionsResult,
  completeConditionsTableInfo,
  initialXml,
  toolBox,
}) {
  const [sqlCode, setSqlCode] = useState('');
  const handleSqlCodeChange = (e) => setSqlCode(e);

  const [result, setResult] = useState([]);
  const handleResultChange = (e) => setResult(e);

  const [tableInfo, setTableInfo] = useState([]);
  const handleTableInfoChange = (e) => setTableInfo(e);

  const [isComplete, setIsComplete] = useLocalStorage(complete, false);

  const [reset, setReset] = useState(false);
  const [reload, setReload] = useState(false);

  React.useEffect(() => {
    typeof sqlCode !== 'undefined' &&
    completeConditionsSql.every((key) => sqlCode.includes(key) === true) &&
    completeConditionsResult.every(
      (key) => JSON.stringify(result).includes(key) === true,
    ) &&
    completeConditionsTableInfo.some(
      (key) => JSON.stringify(tableInfo).includes(key) === true,
    )
      ? setIsComplete(true)
      : '';
  }, [sqlCode, result, tableInfo]);

  return (
    <>
      <div className="relative top-2 col-span-5">
        {description}
        <button
          onClick={() => setReload(true)}
          className="text-bold absolute animate-bounce text-2xl font-bold"
        >
          {isComplete ? feedbackText : ''}
        </button>
        <div className="">
          <BlocklyComponent
            reload={reload}
            reset={reset}
            localStorageKey={workspace}
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
            initialXml={initialXml}
          >
            {toolBox}
          </BlocklyComponent>
          <div className="flex flex-row">
            <div className="basis-1/2">
              <button
                onClick={() => {
                  confirm('Er du sikker på du vil starte øvelsen forfra?');
                  setReset(true);
                }}
                className="relative top-16 rounded-md bg-teal-700/75 p-2 text-white"
              >
                Start forfra!
              </button>
            </div>
            <div>
              <button
                onClick={() => setReload(true)}
                className={`relative top-16 rounded-md p-2 text-white bg-${nextButtonColor}`}
              >
                Næste øvelse
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
