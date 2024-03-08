import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

import { useLocalStorage } from '@uidotdev/usehooks';

import NextExerciseButton from './NextExerciseButton.jsx';
import ConfettiExplosion from 'react-confetti-explosion';

export default function Exercise({
  exercise,
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

  const [complete, setComplete] = useLocalStorage(exercise + 'Complete', false);

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
      ? setComplete(true)
      : '';
  }, [sqlCode, result, tableInfo]);

  return (
    <>
      <div className="flex flex-col">
        <div className="h-28">{description}</div>
        <div className="h-12">
          <div className="pl-72">
            {complete && (
              <ConfettiExplosion
                colors={[
                  '#5b80a6', //Run SQLblocks
                  '#5ba699', //Create table
                  '#805ba6', //column and type
                  '#a65b99', //Insert into
                  '#a6a65b', //Select
                  '#a65b6e', //Where
                  '#74a65b', //Group by having
                  '#D0664f', //Update delete
                ]}
              />
            )}
          </div>
          <button
            onClick={() => setReload(true)}
            className="text-bold animate-bounce text-2xl font-bold"
          >
            {complete ? feedbackText : ''}
          </button>
        </div>
        <div flex flex-row>
          <BlocklyComponent
            reload={reload}
            reset={reset}
            exercise={exercise}
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
        <div className="flex w-[1024px] flex-row justify-between pb-12 pt-4">
          <div>
            <button
              onClick={() => {
                confirm('Er du sikker på du vil starte øvelsen forfra?');
                setComplete(false);
                setReset(true);
              }}
              className="rounded-md bg-teal-700/75 p-2 text-white"
            >
              Start forfra
            </button>
          </div>
          <div className="shrink-0">
            <NextExerciseButton
              exercise={exercise}
              nextExercise={nextExercise}
            />
          </div>
        </div>
      </div>
    </>
  );
}
