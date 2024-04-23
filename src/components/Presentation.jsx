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
  presentation,
  previousPresentation,
  nextPresentation,
  initialXml,
  toolBox,
}) {
  const [sqlCode, setSqlCode] = useState('');
  const handleSqlCodeChange = (e) => setSqlCode(e);

  const [tableInfo, setTableInfo] = useState([]);
  const handleTableInfoChange = (e) => setTableInfo(e);

  const [result, setResult] = useState([]);
  const handleResultChange = (e) => setResult(e);

  const [reset, setReset] = useState(false);
  const [copy, setCopy] = useState(false);
  const [paste, setPaste] = useState(false);

  return (
    <>
      {/*typeof sqlCode != 'undefined' && JSON.stringify(result)*/}
      <div className="flex flex-col">
        <div flex flex-row>
          <BlocklyComponentPresentation
            reset={reset}
            copy={copy}
            paste={paste}
            presentation={presentation}
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
          <div>
            <button
              onClick={() => {
                if (
                  confirm(
                    'Er du sikker på at du vil indlæse et eksempel?\nDine nuværende blokke bliver erstattet.',
                  ) === true
                ) {
                  setReset(true);
                }
              }}
              className="rounded-md bg-teal-700/75 p-2 text-white"
            >
              Indlæs eksempel
            </button>
            <button
              onClick={() => {
                if (
                  confirm(
                    'Er du sikker på at du vil indlæse et eksempel?\nDine nuværende blokke bliver erstattet.',
                  ) === true
                ) {
                  setCopy(true);
                }
              }}
              className="rounded-md bg-teal-700/75 p-2 text-white"
            >
              Copy
            </button>
            <button
              onClick={() => {
                if (
                  confirm(
                    'Er du sikker på at du vil indlæse et eksempel?\nDine nuværende blokke bliver erstattet.',
                  ) === true
                ) {
                  setPaste(true);
                }
              }}
              className="rounded-md bg-teal-700/75 p-2 text-white"
            >
              Paste
            </button>
          </div>
          {/*
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
