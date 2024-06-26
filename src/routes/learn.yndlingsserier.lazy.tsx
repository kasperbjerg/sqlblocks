import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';

export const Route = createLazyFileRoute('/learn/yndlingsserier')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        exercise={'yndlingsserier'}
        nextExercise={'hunde'}
        description={
          <>
            <p>
              Tilføj nu nogle reality-serier til tabellen, så den har mellem 3
              og 5 rækker i alt.
            </p>
            <p>
              Skriv navnet på serien i <b>serie</b>-kolonnen og giv også hver
              serie en <b>rating</b> mellem 1 og 5.
            </p>
            <p>
              Se din tabel med <b>SELECT *</b> til sidst.
            </p>
          </>
        }
        hint={
          <p>
            Hint: Husk at sætte ' ' omkring serie-navnene når du indsætter dem.{' '}
          </p>
        }
        feedbackText={
          <>
            <p className="text-[#805ba6]">Wauw.. du er en champ!</p>
          </>
        }
        completeConditionsSql={[
          ['SELECT*FROMserier'],
          ['serieTEXT'],
          ['ratingINTEGER'],
        ]}
        completeConditionsResult={[['']]}
        completeConditionsTableInfo={[['3 rækker', '4 rækker', '5 rækker']]}
        initialXml={`
              <xml xmlns="http://www.w3.org/1999/xhtml">
              <block type="run_sqlblocks">
                <next>
                <block type="create_table">
                  <field name="NAME">serier</field>
                    <statement name="NAME">
                      <block type="add_text_column">
                        <field name="NAME">serie</field>
                        <next>
                          <block type="add_integer_column">
                            <field name="NAME">rating</field>
                          </block>
                        </next>
                      </block>
                    </statement>
                </next>
              </block>  
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
