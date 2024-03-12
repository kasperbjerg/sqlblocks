import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';

export const Route = createLazyFileRoute('/pengenoed')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        exercise={'pengenoed'}
        nextExercise={'sygdom'}
        description={
          <>
            <p>
              Nedenstående database indeholder nogle populære film sammen med
              deres udgivelsesår.
            </p>
          </>
        }
        feedbackText={
          <>
            <p className="text-[#bf49a4]">Jeps, ret nemt ikke?</p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={[['SELECT*FROMfilm']]}
        completeConditionsTableInfo={[['']]}
        completeConditionsResult={[['[{']]} //to make sure the code is running
        initialXml={`
              <xml xmlns="https://developers.google.com/blockly/xml">
              <block type="run_sqlblocks" id="CQ_Ij!((EM*kFht8op" x="10" y="10"><next>
              <block type="create_table" id="Ezhl*S2@OcWVhC*kdpi"><field name="NAME">sommerfest</field><statement name="NAME"><block type="add_text_column" id="M-1QpZvd0c*HR#rlS+"><field name="NAME">opgave</field><next><block type="add_text_column" id="a-1g+_f8V?u0nTYfXIF1"><field name="NAME">ansvarlig</field><next><block type="add_real_column" id="PC26zf8fWK~H~8hDC?oN"><field name="NAME">budget</field></block></next></block></next></block></statement><next>
              <block type="insert_into_only_values" id="p_7ViV):+9UN3Wfvk:"><field name="table_NAME">sommerfest</field><value name="VALUES"><block type="value" id="#8Fh_G^d@:f|rlCFed="><field name="NAME1">'Book vildmarksbad'</field><value name="NAME"><block type="value" id="av$NvbEkWe,(SGA7-+%R"><field name="NAME1">'Lille Lars'</field><value name="NAME"><block type="value" id="aQC!NaVs@f|Q5(4#EO!"><field name="NAME1">899.95</field></block></value></block></value></block></value><next>
              <block type="insert_into_only_values" id="eQn|51cop3,:u!iHDk"><field name="table_NAME">sommerfest</field><value name="VALUES"><block type="value" id="9IAm?gm~M7yV~YtoM1"><field name="NAME1">'Køb chips'</field><value name="NAME"><block type="value" id="H41dsXj6)90@I+^~NW"><field name="NAME1">'Store Lars'</field><value name="NAME"><block type="value" id="ehQUrhosq32i7-Pz9b?I"><field name="NAME1">200</field></block></value></block></value></block></value><next>
              <block type="insert_into_only_values" id="pf$!FcD7@!@rdr;pMP"><field name="table_NAME">sommerfest</field><value name="VALUES"><block type="value" id="nb=2dtSvV|k/NgcZC3P"><field name="NAME1">'Bestil DJ'</field><value name="NAME"><block type="value" id="pUZvL;po=_go7Vr2D_p-"><field name="NAME1">'Jesper'</field><value name="NAME"><block type="value" id="r?rM1#39zVT7)zpf"><field name="NAME1">0</field></block></value></block></value></block></value><next>
              <block type="insert_into_only_values" id="HJfpQ(.x0qiaS81zA9o"><field name="table_NAME">sommerfest</field><value name="VALUES"><block type="value" id="ry29?F7A=?zf~Ft~Ah6W"><field name="NAME1">'Drikkevarer'</field><value name="NAME"><block type="value" id="#bOPt3udhzErz6i%=)5e"><field name="NAME1">'Store Lars'</field><value name="NAME"><block type="value" id="c%K2f/xtKAM6-/M#L"><field name="NAME1">300</field></block></value></block></value></block></value><next>
              <block type="insert_into_only_values" id=";C1i1Qb*U*P_o6lgAIah"><field name="table_NAME">sommerfest</field><value name="VALUES"><block type="value" id="YnK4#6wXeEWuZifBh0EU"><field name="NAME1">'Bestil telt'</field><value name="NAME"><block type="value" id="Uu4L7vH^1kfoU0#sCr"><field name="NAME1">'Lille Lars'</field><value name="NAME"><block type="value" id="q5IX5gvz=8P@-@4@-Ey"><field name="NAME1">1199.95</field></block></value></block></value></block></value><next>
              <block type="insert_into_only_values" id="!+nn4#*jpLCi@lLjbmh"><field name="table_NAME">sommerfest</field><value name="VALUES"><block type="value" id="wJBl2dF6c,ctG.B(E:#"><field name="NAME1">'Lav invitationer'</field><value name="NAME"><block type="value" id="~/kF:M!0pW3=XuCjaX"><field name="NAME1">'Lille Lars'</field><value name="NAME"><block type="value" id="a@4Cxp^,NhJs0NkQUsVY"><field name="NAME1">0</field></block></value></block></value></block></value><next><block type="select_open" id="S$2HTf((iyr-ObfSy/0"><field name="table">sommerfest</field><value name="NAME"><block type="column" id="Uo4s0~uKl2FffH/sT4y"><field name="NAME1">*</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>          `}
        toolBox={
          <>
            <Block type="create_table" />
            <Block type="add_integer_column" />
            <Block type="add_text_column" />
            <Block type="add_real_column" />
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
            <Block type="update" />
            <Block type="delete" />
          </>
        }
      />
    </>
  );
}
