import React, { useState } from 'react';

import { Block, Value, Field, Shadow } from './index.js';
import BlocklyComponentPresentation from './BlocklyComponentPresentation.jsx';
import '../blocks/customblocks.js';
import '../generator/generator.js';

import { useLocalStorage } from '@uidotdev/usehooks';

import NextExerciseButton from './NextExerciseButton.jsx';
import ConfettiExplosion from 'react-confetti-explosion';
import { json } from '@tanstack/react-router';

export default function Presentation({
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
  const [exploded, setExploded] = useLocalStorage(exercise + 'Exploded', false);

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
    if (
      typeof sqlCode !== 'undefined' &&
      checkConditions(completeConditionsSql, sqlCode.replace(/\s+/g, '')) && // it checks against sqlcode trimmed for whitespaces
      checkConditions(completeConditionsTableInfo, JSON.stringify(tableInfo)) &&
      checkConditions(completeConditionsResult, JSON.stringify(result))
    ) {
      setComplete(true);
    }
  }, [sqlCode, result, tableInfo]);

  React.useEffect(() => {
    if (complete) {
      setExploded(true);
    }
  }, []);

  return (
    <>
      {/*typeof sqlCode != 'undefined' && JSON.stringify(result)*/}
      <div className="flex flex-col">
        <div flex flex-row>
          <BlocklyComponentPresentation
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
          </BlocklyComponentPresentation>
        </div>
        <div className="flex w-[1280px] flex-row justify-between pb-12 pt-4">
          {/*<div>
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
            </div> */}
        </div>
      </div>
    </>
  );
}
