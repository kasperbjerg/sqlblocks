import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block } from '../components';

export const Route = createLazyFileRoute('/hunde')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        exercise={'hunde'}
        workspace={'hundeWorkspace'}
        nextExercise={'gaester'}
        description={
          <>
            <p>
              Viktor vil købe hjemmesiden{' '}
              <u>
                <a href="https://www.lejenhund.dk" target="_blank">
                  lejenhund.dk
                </a>
              </u>{' '}
              så ham og hans venner kan tjene lidt penge på udleje af deres
              hunde.
            </p>
            <p>
              Opret en en <b>hunde</b>-tabel med kolonner til <b>navn</b>,
              <b>alder</b> og <b>ejer</b>.
            </p>
            <p>
              Tilføj Viktors egne to hunde Plet og Trofast på 5 og 12 år, samt
              Pelles hund Balder som er 15 år.
            </p>
          </>
        }
        feedbackText={
          <>
            <p className="text-pink-600/75">'Du er jo en database-wiz'</p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={[
          'CREATE TABLE hund',
          'SELECT * FROM',
          'navn TEXT',
          'alder INTEGER',
          'ejer TEXT',
          'ikto',
          'let',
          'rofas',
          '5',
          '12',
          '15',
          'elle',
          'alde',
        ]}
        completeConditionsResult={['navn']} //to make sure the code is running
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
            <Block type="insert_into" />
            <Block type="select_*" />
          </>
        }
      />
    </>
  );
}
