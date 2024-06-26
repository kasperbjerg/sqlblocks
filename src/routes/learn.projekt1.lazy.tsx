import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';

export const Route = createLazyFileRoute('/learn/projekt1')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        exercise={'projekt1'}
        nextExercise={'varer'}
        description={
          <>
            <p>Fri leg!!</p>
            <p>Lav din egen tabel med lige hvad du har lyst til.</p>
            <p>
              Men den skal have mellem 5 og 10 rækker og du skal bruge både{' '}
              <b>TEXT</b> og <b>INTEGER</b> hvis du vil have øvelsen helt
              rigtigt.
            </p>
          </>
        }
        hint={
          <p>
            Hint: Husk at der ikke må være mellemrum i tabel- og kolonnenavne.{' '}
          </p>
        }
        feedbackText={
          <>
            <p className="text-[#bf49a4]">
              Jeps, lige præcis :) Du må da gerne arbejde videre hvis du har
              lyst.
            </p>
          </>
        }
        completeConditionsSql={[['INTEGER'], ['TEXT']]}
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
            <Block type="select_*" />
          </>
        }
      />
    </>
  );
}
