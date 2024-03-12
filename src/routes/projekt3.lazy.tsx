import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';
import { useLocalStorage } from '@uidotdev/usehooks';

export const Route = createLazyFileRoute('/projekt3')({
  component: About,
});

function About() {
  const [projetk2Xml, setProjekt1Xml] = useLocalStorage(
    'projekt2Workspace',
    `
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `,
  );
  return (
    <>
      <Exercise
        exercise={'projekt3'}
        nextExercise={'projekt3'}
        description={
          <>
            <p>
              Prøv nogle af de ting af du har lært på dit eget projekt.<br></br>
            </p>
          </>
        }
        hint={
          <p>
            Hint: Du skal både bruge UPDATE og DELETE samt tilføje en ny kolonne
            med datatypen REAL for at få øvelsen godkendt.
          </p>
        }
        feedbackText={
          <>
            <p className="text-[#b04a4a]">
              Hurra... Du må gerne prøve flere ting af mens du har momentum.
            </p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={[
          ['UPDATE'],
          ['DELETE'],
          ['INTEGER'],
          ['TEXT'],
          ['REAL'],
        ]}
        completeConditionsTableInfo={[['']]}
        completeConditionsResult={[['[{']]} //to make sure the code is running
        initialXml={projetk2Xml}
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
