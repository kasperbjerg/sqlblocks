import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../Blockly/Exercise.jsx';
import { Block } from '../Blockly';

export const Route = createLazyFileRoute('/projekt1')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        isCompleteKey={'projekt1Complete'}
        workspace={'projekt1Workspace'}
        nextExercise={'projekt1'}
        description={
          <>
            <p>Fri leg!!</p>
            <p>Lav din egen tabel med lige hvad du har lyst til</p>
            <p>
              Men den skal have mindst 5 rækker og du skal bruge både{' '}
              <b>TEXT</b> og <b>INTEGER</b> hvis du vil have opgaven helt
              rigtigt.
            </p>
            <br></br>
          </>
        }
        feedbackText={
          <>
            <p className="text-teal-700/75">Jeps, lige præcis :)</p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={['INTEGER', 'TEXT']}
        completeConditionsResult={['']}
        completeConditionsTableInfo={[
          'rækker: 5',
          'rækker: 6',
          'rækker: 7',
          'rækker: 8',
          'rækker: 9',
          'rækker: 10',
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
            <Block type="insert_into" />
            <Block type="select_*" />
          </>
        }
      />
    </>
  );
}
