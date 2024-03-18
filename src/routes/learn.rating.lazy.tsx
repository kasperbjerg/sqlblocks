import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';

export const Route = createLazyFileRoute('/learn/rating')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        exercise={'rating'}
        nextExercise={'pigefilm'}
        description={
          <>
            <p>
              Lav nu en ny kolonne <b>rating</b>, og giv hver film en rating
              mellem 1 og 10
            </p>
            <p>
              Vælg nu kun film med en rating på mere end 5. Vis kun kolonnenerne{' '}
              <b>navn</b> og <b>rating</b> og sorter listen så filmen med størst
              rating er øverst.
            </p>
          </>
        }
        hint={
          <p>Hint: Der er forskel på {'>'} og  ≥, og koden skal stadig gøre det ønskede selvom der ændres på filmenes ratings.</p>
        }
        feedbackText={
          <>
            <p className="text-pink-600/75">Super flot :)</p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={[
          ['ratingINTEGER'],
          ['SELECTnavn,ratingFROMfilm', 'SELECTrating,navnFROMfilm'],
          [
            'WHERErating>5',
            'WHERErating>=6',
            'WHERE5<rating',
            'WHERE6<=rating',
          ],
          ['ORDERBY(rating)DESC'],
        ]}
        completeConditionsTableInfo={[['']]}
        completeConditionsResult={[['[{']]} //to make sure the code is running
        initialXml={`
              <xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"run_sqlblocks\" id=\"CQ_Ij!((EM*kFht8op\" x=\"10\" y=\"10\"><next><block type=\"create_table\" id=\"Ezhl*S2@OcWVhC*kdpi\"><field name=\"NAME\">film</field><statement name=\"NAME\"><block type=\"add_text_column\" id=\"M-1QpZvd0c*HR#rlS+\"><field name=\"NAME\">navn</field><next><block type=\"add_integer_column\" id=\"g:MDA/wJ/b4A_JUc0=\"><field name=\"NAME\">udgivelsesår</field></block></next></block></statement><next><block type=\"insert_into_only_values\" id=\"%1rtK#NaJ2ZUf*Lv)m+\"><field name=\"table_NAME\">film</field><value name=\"VALUES\"><block type=\"value\" id=\"Kg=E-yvdeKT1Q@=kMg2j\"><field name=\"NAME1\">'Avatar'</field><value name=\"NAME\"><block type=\"value\" id=\"Vp_oK7f;iB^cY=3?):\"><field name=\"NAME1\">2009</field></block></value></block></value><next><block type=\"insert_into_only_values\" id=\"k)1xncEd6_DBqBjuw~P4\"><field name=\"table_NAME\">film</field><value name=\"VALUES\"><block type=\"value\" id=\"eyO:U=4%7ErMgj6cW6ou\"><field name=\"NAME1\">'Titanic'</field><value name=\"NAME\"><block type=\"value\" id=\"s,Nb3bbNh)%j~j?_o\"><field name=\"NAME1\">1997</field></block></value></block></value><next><block type=\"insert_into_only_values\" id=\"j3vj1^+Ibxs.bOY0dk\"><field name=\"table_NAME\">film</field><value name=\"VALUES\"><block type=\"value\" id=\"yHX$Tl3IF,bona)RAu6\"><field name=\"NAME1\">'Star Wars: Episode IV - A New Hope'</field><value name=\"NAME\"><block type=\"value\" id=\"(9wkYdfdPUm8wpfZ_NG\"><field name=\"NAME1\">1977</field></block></value></block></value><next><block type=\"insert_into_only_values\" id=\"^;aEaPyQ;oBi9#;6)O\"><field name=\"table_NAME\">film</field><value name=\"VALUES\"><block type=\"value\" id=\"TG!=9H%hvXj.o(?*H_\"><field name=\"NAME1\">'Shrek 2'</field><value name=\"NAME\"><block type=\"value\" id=\"4u5Sp-4I4PQ-Ure9Cx\"><field name=\"NAME1\">2004</field></block></value></block></value><next><block type=\"insert_into_only_values\" id=\"1(O8^N5G/1hFUP|AWo\"><field name=\"table_NAME\">film</field><value name=\"VALUES\"><block type=\"value\" id=\"LU;WV+$PSe+$^6hob0\"><field name=\"NAME1\">'The Lion King'</field><value name=\"NAME\"><block type=\"value\" id=\".iP!2DHjNK;QNYbm*u7\"><field name=\"NAME1\">1994</field></block></value></block></value><next><block type=\"insert_into_only_values\" id=\"?L^7Ovx0,A.r#7~Qu)e\"><field name=\"table_NAME\">film</field><value name=\"VALUES\"><block type=\"value\" id=\"eWfU0CA73A.9%F4D8xx\"><field name=\"NAME1\">'Disneys Up'</field><value name=\"NAME\"><block type=\"value\" id=\")WyvzPbpF|?^F1x_@ypQ\"><field name=\"NAME1\">2009</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>
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
