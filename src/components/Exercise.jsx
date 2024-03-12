import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

import { useLocalStorage } from '@uidotdev/usehooks';

import NextExerciseButton from './NextExerciseButton.jsx';
import ConfettiExplosion from 'react-confetti-explosion';
import { json } from '@tanstack/react-router';

export default function Exercise({
  exercise,
  description,
  hint,
  feedbackText,
  nextExercise,
  completeConditionsSql,
  completeConditionsTableInfo,
  completeConditionsResult,
  initialXml,
  toolBox,
}) {
  const [sqlCode, setSqlCode] = useState('');
  const handleSqlCodeChange = (e) => setSqlCode(e);

  const [tableInfo, setTableInfo] = useState([]);
  const handleTableInfoChange = (e) => setTableInfo(e);

  const [result, setResult] = useState([]);
  const handleResultChange = (e) => setResult(e);

  const [complete, setComplete] = useLocalStorage(exercise + 'Complete', false);

  const [reset, setReset] = useState(false);
  const [reload, setReload] = useState(false);

  //Will check conditions for exercise complete
  //One of the strings in every sub-array needs to be in the codeString
  function checkConditions(conditionsArray, codeString) {
    return conditionsArray.every((subArray) =>
      subArray.some((textString) => codeString.includes(textString) === true),
    );
  }

  React.useEffect(() => {
    typeof sqlCode !== 'undefined' &&
    checkConditions(completeConditionsSql, sqlCode.replace(/\s+/g, '')) && // it checks against sqlcode trimmed for whitespaces
    checkConditions(completeConditionsTableInfo, JSON.stringify(tableInfo)) &&
    checkConditions(completeConditionsResult, JSON.stringify(result))
      ? setComplete(true)
      : '';
  }, [sqlCode, result, tableInfo]);

  return (
    <>
      {/*typeof sqlCode != 'undefined' &&
        JSON.stringify(sqlCode.replace(/\s+/g, ''))*/}
      <div className="flex flex-col">
        <div className="h-20 w-[1024px]">{description}</div>
        <div className="h-8 text-[#D0664f]">{hint}</div>
        <div className="h-12">
          <div className="pl-72">
            {complete && (
              <ConfettiExplosion
                colors={[
                  '#5b80a6', //Blue (Run SQLblocks)
                  '#5ba699', //Green (Create table)
                  '#805ba6', //Violet (column and type)
                  '#a65b99', //Purple (Insert into)
                  '#a6a65b', //Mustard (Select)
                  '#bf49a4', //Pink (Where)
                  '#74a65b', //Green (Group by having)
                  '#D0664f', //Orange (Order by limit)
                  '#b04a4a', //Red (Update delete)
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
