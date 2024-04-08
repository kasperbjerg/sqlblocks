import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';
import { useLocalStorage } from '@uidotdev/usehooks';

export const Route = createLazyFileRoute('/learn/projekt5')({
  component: About,
});

function About() {
  const [projetk4Xml, setProjekt4Xml] = useLocalStorage(
    'projekt4Workspace',
    `
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `,
  );
  return (
    <>
      <Exercise
        exercise={'projekt5'}
        nextExercise={'theend'}
        description={
          <>
            <p>
              Sidste projekt! <br />
              Prøv de nye blokke af på din database fra sidste projekt.
            </p>
          </>
        }
        hint={<p>Hint:</p>}
        feedbackText={
          <>
            <p className="text-[#805ba6]">
              Slut prut finale! Hop lige videre og læs "The End" siden når du
              ikke giver at lege mere.
            </p>
          </>
        }
        completeConditionsSql={[['']]}
        completeConditionsTableInfo={[['']]}
        completeConditionsResult={[['[{']]} //to make sure the code is running
        initialXml={projetk4Xml}
        toolBox={
          <>
            <Block type="create_table" />
            <Block type="add_dropdown_column" />
            <Block type="insert_into_with_columns">
              <Value name="VALUES">
                <Block type="value">
                  <Field name="NAME1"></Field>
                </Block>
              </Value>
            </Block>
            <Block type="column" />
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
            <Block type="aggregate" />
            <Block type="as" />
            <Block type="join" />
            <Block type="where" />
            <Block type="comparison" />
            <Block type="and_or" />
            <Block type="in">
              <Value name="NAME">
                <Block type="list_item">
                  <next>
                    <Block type="list_item"></Block>
                  </next>
                </Block>
              </Value>
            </Block>
            <Block type="list_item" />
            <Block type="group_by" />
            <Block type="having" />
            <Block type="order_by" />
            <Block type="limit" />
            <Block type="update" />
            <Block type="delete" />
          </>
        }
      />
    </>
  );
}
