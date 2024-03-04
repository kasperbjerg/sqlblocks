import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

import { useLocalStorage } from '@uidotdev/usehooks';

import NextExerciseButton from './NextExerciseButton.jsx';

export default function Exercise({
  isCompleteKey,
  workspace,
  description,
  feedbackText,
  nextExercise,
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

  const [isComplete, setIsComplete] = useLocalStorage(isCompleteKey, false);

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
      <div className="flex flex-col">
        <div className="h-36">
          {description}
          <button
            onClick={() => setReload(true)}
            className="text-bold animate-bounce text-2xl font-bold"
          >
            {isComplete ? feedbackText : ''}
          </button>
        </div>
        <div flex flex-row>
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
              drag: false,
              wheel: true,
            }}
            initialXml={initialXml}
          >
            {toolBox}
          </BlocklyComponent>
        </div>
        <div className="flex flex-row pb-12 pt-4">
          <div className="w-[500px]">
            <button
              onClick={() => {
                confirm('Er du sikker på du vil starte øvelsen forfra?');
                setIsComplete(false);
                setReset(true);
              }}
              className="rounded-md bg-teal-700/75 p-2 text-white"
            >
              Start forfra
            </button>
          </div>
          <div className="pl-2">
            <NextExerciseButton
              isCompleteKey={isCompleteKey}
              nextExercise={nextExercise}
            />
          </div>
        </div>
      </div>
    </>
  );
}
