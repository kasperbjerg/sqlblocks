import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../Blockly/Exercise.jsx';
import { Block } from '../Blockly';

export const Route = createLazyFileRoute('/yndlingsserier')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        isCompleteKey={'yndlingsserierComplete'}
        workspace={'yndlingsserierWorkspace'}
        nextExercise={'hunde'}
        description={
          <>
            <p>Tilføj nu mindst 3 reality-serier du kender til tabellen.</p>
            <p>
              Skriv navnet på serien i <b>serie</b>-kolonnen og giv også hver
              serie en <b>rating</b> mellem 1 og 5.
            </p>
            <p>
              Se din tabel med <b>SELECT *</b> til sidst.
            </p>
            <p className="text-orange-500">
              Hint: Husk at sætte ' ' omkring serie-navnene når du indsætter
              dem.{' '}
            </p>
          </>
        }
        feedbackText={
          <>
            <p className="text-teal-700/75">
              Wauw.. du er en champ! Klik her for at få dine energypoints.
            </p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={[
          'SELECT * FROM serier',
          'serie TEXT',
          'rating INTEGER',
        ]}
        completeConditionsResult={[]}
        completeConditionsTableInfo={[
          //Bruteforce-like-method for checking that the amount of rows is meet, ugly but it works so far, put in 'rækker: 3', 'rækker: 4' ...
          'rækker: 3',
          'rækker: 4',
          'rækker: 5',
          'rækker: 6',
        ]}
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
            <Block type="insert_into" />
            <Block type="select_*" />
          </>
        }
      />
    </>
  );
}
