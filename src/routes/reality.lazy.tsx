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
              tabel til dine yndlingsserier.
            </p>
            <p>
              Opret en tabel der hedder <b>serier</b> tilføj to kolonner.
            </p>
            <p>
              Den første kolonne skal have typen <b>TEXT</b> og hedde{' '}
              <b>serie</b>.
            </p>
            <p>
              Anden kolonne skal have typen <b>INTEGER</b> og hedde{' '}
              <b>rating</b>.
            </p>
          </>
        }
        feedbackText={
          <>
            <p className="text-purple-900/75">
              SÅDAN!.. godt arbejde :) Klik her for at få dine energypoints.
            </p>
          </>
        }
        nextButtonColor={`sky-800/75`}
        completeConditionsSql={[
          'CREATE TABLE serier',
          'serie TEXT',
          'rating INTEGER',
        ]}
        completeConditionsResult={['']}
        completeConditionsTableInfo={['']} //Bruteforce-like-method for checking that the amount of rows is meet, ugly but it works so far, put in '3 rækker', '4 rækker' ...
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
