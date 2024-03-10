import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';
import { useLocalStorage } from '@uidotdev/usehooks';

export const Route = createLazyFileRoute('/pigefilm')({
  component: About,
});

function About() {
  const [ratingXml, setRatingXml] = useLocalStorage(
    'ratingWorkspace',
    `
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `,
  );
  return (
    <>
      <Exercise
        exercise={'pigefilm'}
        nextExercise={'projekt2'}
        description={
          <>
            <p>
              Viktor gider ikke pigefilm, så han vil have en liste hvor Titanic
              ikke er med. <br></br>
              Vælg alle film undtagen Titanic og denne gang skal du medtage alle
              kolonner og sortere tabellen alfabetisk efter filmnavn.
            </p>
          </>
        }
        hint={<>Hint: Brug SELECT * til at vælge alle kolonner</>}
        feedbackText={
          <>
            <p className="text-[#5ba699]">
              Det er nemt at arbejde med databaser ikke ;)
            </p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={[' ORDER BY ( navn ) ASC', '!=', 'SELECT  *']} // weird space between select and * to make it work?
        completeConditionsResult={['']}
        completeConditionsTableInfo={['']}
        initialXml={ratingXml}
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
