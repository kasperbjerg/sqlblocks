import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';

export const Route = createLazyFileRoute('/learn/projekt4')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        exercise={'projekt4'}
        nextExercise={'projekt4'}
        description={
          <>
            <p>
              Det er vist på tide at starte forfra på et nyt projekt. Det må
              gerne handle om det samme, men det kan også være du har lyst til
              at arbejde med noget nyt. Du skal sørge for at have mindst to
              tabeller og tilføje en <b>INTEGER PRIMARY KEY</b> til begge.
              Tabellerne skal være relateret så brug den enes primær nøgle i den
              anden. Den tabel skal have mindst 5 rækker, men den anden må gerne
              være kortere.
            </p>
          </>
        }
        hint={
          <p>
            Hint: Brug en <b>JOIN</b>-blok til at vise noget information fra
            databasen som er en kombination fra de to tabeller.{' '}
          </p>
        }
        feedbackText={
          <>
            <p className="text-[#bf49a4]">
              Kanon, det er tilladt at arbejde videre hvis du vil :)
            </p>
          </>
        }
        completeConditionsSql={[['INTEGERPRIMARYKEY'], ['JOIN']]}
        completeConditionsResult={[['[{']]} //to make sure the code is running
        completeConditionsTableInfo={[
          [
            '5 rækker',
            '6 rækker',
            '7 rækker',
            '8 rækker',
            '9 rækker',
            '10 rækker',
          ],
        ]}
        initialXml={`
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `}
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
            <Block type="as" />
            <Block type="join" />
            <Block type="where" />
            <Block type="comparison" />
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
