import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';

import { useLocalStorage } from '@uidotdev/usehooks';

export const Route = createLazyFileRoute('/learn/gaester')({
  component: About,
});

function About() {
  const [hundeXml, sethundeXml] = useLocalStorage(
    'hundeWorkspace',
    `
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `,
  );
  return (
    <>
      <Exercise
        exercise={'gaester'}
        nextExercise={'projekt1'}
        description={
          <>
            <p>
              Din sql-kode fra sidste opgave er nedenfor. (Ellers så klik på
              "Start forfra" i bunden).
            </p>
            <p>
              Anne har hørt om projektet og vil være med, men foreslår at
              tabellen skal hedde <b>kæledyr</b>. Hun siger også at tabellen
              skal indholde hvor ofte dyrene skal <b>fodres</b> og har selv
              Nuser på 7 år som skal fodres 3 gange. Thea, hendes veninde, har
              1-årige Samson. Tilpas tabellen!
            </p>
          </>
        }
        hint={
          <p>
            Hint: Find selv på oplysninger hvis de ikke står i opgaveteksten.
          </p>
        }
        feedbackText={
          <>
            <p className="text-[#a6a65b]">Fantastisk</p>
          </>
        }
        completeConditionsSql={[
          ['kæledyr'],
          ['Nuser', 'nuser'],
          ['Fodre', 'fodre', 'Fodring', 'fodring'],
          ['Thea', 'thea'],
          ['Anne', 'anne'],
          ['7'],
          ['3'],
          ['1'],
          ['Samson', 'samson'],
        ]}
        completeConditionsResult={[['[{']]} //to make sure the code is running
        completeConditionsTableInfo={[['']]}
        initialXml={hundeXml}
        toolBox={
          <>
            <Block type="create_table" />
            <Block type="add_integer_column" />
            <Block type="add_text_column" />
            <Block type="insert_into_only_values">
              <Value name="VALUES">
                <Block type="value">
                  <Field name="NAME1"></Field>
                </Block>
              </Value>
            </Block>
            <Block type="value" />
            <Block type="select_*" />
          </>
        }
      />
    </>
  );
}
