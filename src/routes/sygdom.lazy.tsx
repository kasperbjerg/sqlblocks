import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';
import { useLocalStorage } from '@uidotdev/usehooks';

export const Route = createLazyFileRoute('/sygdom')({
  component: About,
});

function About() {
  const [pengenoedXml, setPengenoedXml] = useLocalStorage(
    'pengenoedWorkspace',
    `
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `,
  );
  return (
    <>
      <Exercise
        exercise={'sygdom'}
        nextExercise={'afbud'}
        description={
          <>
            <p>
              Lars K er blevet syg, så Lars M skal lave invitationerne.{' '}
              <br></br>
              Opdater tabellen og sorter den alfabetisk efter hvem der er
              ansvarlig.
            </p>
          </>
        }
        hint={'Hint: Og stadig uden at lave ændringer i INSERT INTO.'}
        feedbackText={
          <>
            <p className="text-[#74a65b]">Jeps, ret nemt ikke?</p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={[['']]}
        completeConditionsTableInfo={[['']]}
        completeConditionsResult={[
          [
            '[{"opgave":"Bestil DJ","ansvarlig":"Jesper","budget":0},{"opgave":"Køb chips","ansvarlig":"Lars M","budget":200},{"opgave":"Drikkevarer","ansvarlig":"Lars M","budget":300},{"opgave":"Lav invitationer","ansvarlig":"Lars M","budget":0}]',
          ],
        ]}
        initialXml={pengenoedXml}
        toolBox={
          <>
            <Block type="create_table" />
            <Block type="add_integer_column" />
            <Block type="add_text_column" />
            <Block type="add_real_column" />
            <Block type="insert_into_only_values">
              <Value name="VALUES">
                <Block type="value">
                  <Field name="NAME1"></Field>
                </Block>
              </Value>
            </Block>
            <Block type="value" />
            <Block type="select_open">
              <Field name="table"></Field>
              <Value name="NAME">
                <Block type="column">
                  <Field name="NAME1">*</Field>
                </Block>
              </Value>
            </Block>
            <Block type="column" />
            <Block type="where" />
            <Block type="comparison" />
            <Block type="order_by" />
            <Block type="update" />
            <Block type="delete" />
          </>
        }
      />
    </>
  );
}
