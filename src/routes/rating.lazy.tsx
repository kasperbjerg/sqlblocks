import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';

export const Route = createLazyFileRoute('/rating')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        isCompleteKey={'ratingComplete'}
        workspace={'ratingWorkspace'}
        nextExercise={'rating'}
        description={
          <>
            <p>
              Lav nu en ny kolonne <b>rating</b>
            </p>
            <p>Giv hver film en rating mellem 1 og 10</p>
            <p>Vælg nu kun film med en rating på 5 eller mere</p>
            <p>
              Vis kun kolonnenerne <b>navn</b> og <b>rating</b> og sorter så dem med størt rating er øverst.
            </p>
          </>
        }
        feedbackText={
          <>
            <p className="text-teal-700/75">Jeps, lige præcis :)</p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={['dd']}
        completeConditionsResult={['dd']}
        completeConditionsTableInfo={['']}
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
            <Block type="add_integer_column" />
            <Block type="add_text_column" />
            <Block type="insert_into" />
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
