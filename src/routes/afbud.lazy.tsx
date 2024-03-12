import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';
import { useLocalStorage } from '@uidotdev/usehooks';

export const Route = createLazyFileRoute('/afbud')({
  component: About,
});

function About() {
  const [sygdomXml, setSygdomXml] = useLocalStorage(
    'sygdomWorkspace',
    `
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `,
  );
  return (
    <>
      <Exercise
        exercise={'afbud'}
        nextExercise={'projekt3'}
        description={
          <>
            <p>
              Nu har Jespers fætter fået et andet fedt DJ job i Horsens og
              Jesper har besluttet at tage med, så de kommer ikke til
              sommerfesten desværre.
              <br></br>
              Slet rækken med DJ og sorter tabellen efter opgave.
            </p>
          </>
        }
        feedbackText={
          <>
            <p className="text-[#D0664f]">Jeps, ret nemt ikke?</p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={[['']]}
        completeConditionsTableInfo={[['']]}
        completeConditionsResult={[
          [
            '[{"opgave":"Drikkevarer","ansvarlig":"Lars M","budget":300},{"opgave":"Køb chips","ansvarlig":"Lars M","budget":200},{"opgave":"Lav invitationer","ansvarlig":"Lars M","budget":0}]',
          ],
        ]} //to make sure the code is running
        initialXml={sygdomXml}
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
