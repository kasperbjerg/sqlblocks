import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';

export const Route = createLazyFileRoute('/reality')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        exercise={'reality'}
        nextExercise={'yndlingsserier'}
        description={
          <>
            <p>
              Ser du reality-programmer? I de næste øvelser skal du lave en
              tabel til dine yndlingsserier. Opret en tabel der hedder{' '}
              <b>serier</b> tilføj to kolonner.
            </p>
            <p>
              Den første kolonne skal have typen <b>TEXT</b> og hedde{' '}
              <b>serie</b>. Anden kolonne skal have typen <b>INTEGER</b> og
              hedde <b>rating</b>.
            </p>
          </>
        }
        hint={
          <p>
            Hint: Hvis ting er skrevet med <b>fed skrift</b> skal du skrive og
            stave dem på helt samme måde når du løser øvelsen.
          </p>
        }
        feedbackText={
          <>
            <p className="text-purple-900/75">SÅDAN!.. godt arbejde :)</p>
          </>
        }
        nextButtonColor={`sky-800/75`}
        //completeConditionsSQL needs to be trimmed for whitespaces
        completeConditionsSql={[
          ['CREATETABLEserier'],
          ['serieTEXT',],
          ['ratingINTEGER', 'ratingTEXT'],
        ]}
        completeConditionsResult={[['']]}
        completeConditionsTableInfo={[['']]}
        initialXml={`
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `}
        toolBox={
          <>
            <Block type="create_table" />
            <Block type="add_integer_column" />
            <Block type="add_text_column" />
          </>
        }
      />
    </>
  );
}
