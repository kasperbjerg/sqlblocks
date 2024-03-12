import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';
import { useLocalStorage } from '@uidotdev/usehooks';

export const Route = createLazyFileRoute('/projekt2')({
  component: About,
});

function About() {
  const [projetk1Xml, setProjekt1Xml] = useLocalStorage(
    'projekt1Workspace',
    `
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `,
  );
  return (
    <>
      <Exercise
        exercise={'projekt2'}
        nextExercise={'priser'}
        description={
          <>
            <p>
              Prøv nogle af de ting af du har lært på dit eget projekt.<br></br>
              Hvis dit projekt fra tidligere ikke er loadet ind, så klik "Start
              forfra" i bunden.
            </p>
          </>
        }
        hint={
          <p>
            Hint: Du skal både bruge WHERE og ORDER BY for at få øvelsen
            godkendt.
          </p>
        }
        feedbackText={
          <>
            <p className="text-[#805ba6]">
              Sådan, allerede godkendt! Du må gerne eksperimentere mere hvis du
              har lyst.
            </p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={[['ORDERBY'], ['WHERE']]}
        completeConditionsTableInfo={[['']]}
        completeConditionsResult={[['[{']]} //to make sure the code is running
        initialXml={projetk1Xml}
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
          </>
        }
      />
    </>
  );
}
