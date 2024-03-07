import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';

export const Route = createLazyFileRoute('/test')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        isCompleteKey={'testComplete'}
        workspace={'testWorkspace'}
        nextExercise={'test'}
        description={
          <>
            <p>Fri leg!!</p>
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
          '5 rækker',
          '6 rækker',
          '7 rækker',
          '8 rækker',
          '9 rækker',
          '10 rækker',
        ]}
        initialXml={`
              <xml xmlns="http://www.w3.org/1999/xhtml">

                <block type="run_sqlblocks">
                <next>
                <block type="create_table">
                  <field name="NAME">film</field>
                    <statement name="NAME">
                      <block type="add_text_column">
                        <field name="NAME">navn</field>
                        <next>
                          <block type="add_integer_column">
                            <field name="NAME">udgivelsesår</field>
                          </block>
                        </next>
                        
                      </block>
                    </statement>
                    <next><block type="insert_into" /><field name="table_NAME">film</field><field name="row_names">'Avatar', 2009</field><next><block type="insert_into" /><field name="table_NAME">film</field><field name="row_names">'Titanic', 1997</field><next><block type="insert_into" /><field name="table_NAME">film</field><field name="row_names">'Star Wars: Episode IV - A New Hope', 1977</field><next><block type="insert_into" /><field name="table_NAME">film</field><field name="row_names">'Shrek 2', 2004</field><next><block type="insert_into" /><field name="table_NAME">film</field><field name="row_names">'The Lion King', 1994</field><next><block type="insert_into" /><field name="table_NAME">film</field><field name="row_names">'Disneys Up', 2009</field></next></next></next></next></next></next>
                </next>
              </block>

              </xml>
          `}
        toolBox={
          <>
            <Block type="create_table" />
            <Block type="add_key_column" />
            <Block type="add_integer_column" />
            <Block type="add_text_column" />
            <Block type="add_real_column" />
            <Block type="add_dropdown_column" />
            <Block type="insert_into" />
            <Block type="insert_into_only_values" />
            <Block type="insert_into_with_columns" />
            <Block type="column" />
            <Block type="value" />
            <Block type="select_*" />
            <Block type="select_open">
              <Field name="table"></Field>
              <Value name="NAME">
                <Block type="column">
                  <Field name="NAME1">*</Field>
                </Block>
              </Value>
            </Block>
            <Block type="join" />
            <Block type="column" />
            <Block type="aggregate" />
            <Block type="more" />
            <Block type="as" />

            <Block type="where" />
            <Block type="comparison" />
            <Block type="and_or" />
            <Block type="in" />

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
