import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';
import { useLocalStorage } from '@uidotdev/usehooks';

export const Route = createLazyFileRoute('/learn/theend')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        exercise={'theend'}
        nextExercise={'theend'}
        description={
          <>
            <p>The end!</p>
          </>
        }
        hint={<p>Hint:</p>}
        feedbackText={
          <>
            <p className="text-[#805ba6]">Så er du igang igen.. fedt!</p>
          </>
        }
        completeConditionsSql={[['']]}
        completeConditionsTableInfo={[['']]}
        completeConditionsResult={[['[{']]} //to make sure the code is running
        initialXml={`<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"run_sqlblocks\" id=\")$x:KTYWOND_BZzgZBH\" x=\"10\" y=\"10\"><next><block type=\"create_table\" id=\"N*x0/O_|MY+ZU!Xnt?Y\"><field name=\"NAME\">tracks</field><statement name=\"NAME\"><block type=\"add_dropdown_column\" id=\"^kBs,e7Pkt!Hw;VgWB!(\"><field name=\"NAME\">trackId</field><field name=\"NAME2\">INTEGER PRIMARY KEY</field><next><block type=\"add_dropdown_column\" id=\"Ae0NawLYzVo!Ct+E#2f*\"><field name=\"NAME\">titel</field><field name=\"NAME2\">TEXT</field><next><block type=\"add_dropdown_column\" id=\"vUzxp+_KT*=#Ci6tZmO\"><field name=\"NAME\">kunstnerId</field><field name=\"NAME2\">INTEGER</field><next><block type=\"add_dropdown_column\" id=\"waW5hQdpduHuj%u?YwAI\"><field name=\"NAME\">albumId</field><field name=\"NAME2\">INTEGER</field></block></next></block></next></block></next></block></statement><next><block type=\"insert_into_with_columns\" id=\"DZ(9NHEK1yz#v*e1tS|J\"><field name=\"table_NAME\">tracks</field><value name=\"COLUMNS\"><block type=\"column\" id=\"^UHrxD$8hT_nLZ+POv0\"><field name=\"NAME1\">titel</field><value name=\"NAME\"><block type=\"column\" id=\"mA~VqcYTtGAM+^.||!T_\"><field name=\"NAME1\">kunstnerId</field></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"_HX=JGXfwy30,fzXqp\"><field name=\"NAME1\">'Leap Of Faith'</field><value name=\"NAME\"><block type=\"value\" id=\"6Q0Zf9*nR^BqZlwV:+Fn\"><field name=\"NAME1\">4</field></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\"k:hE)h.I;ZI15;mOVp6z\"><field name=\"table_NAME\">tracks</field><value name=\"COLUMNS\"><block type=\"column\" id=\"an?eu!7kn?Kxjrs6;a0\"><field name=\"NAME1\">titel</field><value name=\"NAME\"><block type=\"column\" id=\"^CJ%qnr%hOL+*C;RLKv\"><field name=\"NAME1\">kunstnerId</field><value name=\"NAME\"><block type=\"column\" id=\"^N@tWh~$FoQFIRw31czf\"><field name=\"NAME1\">albumId</field></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"Tz2z(/WrB*,wP$m9wl8\"><field name=\"NAME1\">'yes, and?'</field><value name=\"NAME\"><block type=\"value\" id=\"%a@iW.v0=-W8(+V$KJ|\"><field name=\"NAME1\">1</field><value name=\"NAME\"><block type=\"value\" id=\"JJXIl1)3t.5f@EUp-\"><field name=\"NAME1\">2</field></block></value></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\":MxYP^Gf_4NvPA(+qXi\"><field name=\"table_NAME\">tracks</field><value name=\"COLUMNS\"><block type=\"column\" id=\"gC8A3WIj_qtHVg63s-\"><field name=\"NAME1\">titel</field><value name=\"NAME\"><block type=\"column\" id=\"TzIsV4q8vx,R|ezfUu3R\"><field name=\"NAME1\">kunstnerId</field><value name=\"NAME\"><block type=\"column\" id=\"jz5==1pn2Ly.i,:aDnxT\"><field name=\"NAME1\">albumId</field></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"3(1t_|/~(9isGgskU^l\"><field name=\"NAME1\">'Ghost'</field><value name=\"NAME\"><block type=\"value\" id=\"2MaVHPkH4Va-s@6Qvg\"><field name=\"NAME1\">3</field><value name=\"NAME\"><block type=\"value\" id=\"#.ns:Y~mAhVW9*lD1GO\"><field name=\"NAME1\">4</field></block></value></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\":R1Ai_Xf.6$F%j0i9dO\"><field name=\"table_NAME\">tracks</field><value name=\"COLUMNS\"><block type=\"column\" id=\",iA,Si:xjxEYywoM39J#\"><field name=\"NAME1\">titel</field><value name=\"NAME\"><block type=\"column\" id=\"?|rlo,u~HhGS~Np4;\"><field name=\"NAME1\">kunstnerId</field><value name=\"NAME\"><block type=\"column\" id=\"lB#GYG(mWmq!_:yV6OG\"><field name=\"NAME1\">albumId</field></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"NkqDpFJW3/A)Gwq5.b\"><field name=\"NAME1\">'Daughter of Jonah'</field><value name=\"NAME\"><block type=\"value\" id=\"w6J~|_23SG1xTJg6U7$J\"><field name=\"NAME1\">3</field><value name=\"NAME\"><block type=\"value\" id=\"YS9m,arI!bQfy71ppXt\"><field name=\"NAME1\">4</field></block></value></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\"sTwCq,lrl#prU5r#:Y/2\"><field name=\"table_NAME\">tracks</field><value name=\"COLUMNS\"><block type=\"column\" id=\"9hZF$7cAPxCo+EHNzv%\"><field name=\"NAME1\">titel</field><value name=\"NAME\"><block type=\"column\" id=\"3DlQvwG|!cGq#;R(f6%\"><field name=\"NAME1\">kunstnerId</field><value name=\"NAME\"><block type=\"column\" id=\").Ltx,2hH3V5!aFV-i\"><field name=\"NAME1\">albumId</field></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"aE(i5@JAa.2ZjzvuI%%\"><field name=\"NAME1\">'Latch'</field><value name=\"NAME\"><block type=\"value\" id=\"L@XhnV9C.2E=4LeSpbp\"><field name=\"NAME1\">2</field><value name=\"NAME\"><block type=\"value\" id=\";^Tc~Z6.FHh-gv:p+R$\"><field name=\"NAME1\">1</field></block></value></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\"#L?vXYBiNOaLZj5;M-\"><field name=\"table_NAME\">tracks</field><value name=\"COLUMNS\"><block type=\"column\" id=\"VpsrgjIyzU3%1MrD.ce=\"><field name=\"NAME1\">titel</field><value name=\"NAME\"><block type=\"column\" id=\"uIPoG8D,GSL~KrO$I/um\"><field name=\"NAME1\">kunstnerId</field></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"SLu264uehL$5g!A@ydK\"><field name=\"NAME1\">'Just Look Up'</field><value name=\"NAME\"><block type=\"value\" id=\"C5(aDzI,qLnSH?HIXgF\"><field name=\"NAME1\">1</field></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\"apgNZU1hdEF@#n$aW)m\"><field name=\"table_NAME\">tracks</field><value name=\"COLUMNS\"><block type=\"column\" id=\"p%xmsq3Ms4kj*B0Th\"><field name=\"NAME1\">titel</field><value name=\"NAME\"><block type=\"column\" id=\"!L49h7pY-xge$%+AFSk|\"><field name=\"NAME1\">kunstnerId</field></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"Z2gzndJ@h$9$$W~SP;o\"><field name=\"NAME1\">'Hope This Song Is For You'</field><value name=\"NAME\"><block type=\"value\" id=\"r2|9Q%(!cHG*mbYaXo0k\"><field name=\"NAME1\">4</field></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\"(0cTE0p*u_!QYWX6$w\"><field name=\"table_NAME\">tracks</field><value name=\"COLUMNS\"><block type=\"column\" id=\"S2(KC*+ag-;MiAd3.*oD\"><field name=\"NAME1\">titel</field><value name=\"NAME\"><block type=\"column\" id=\"-N@9K6,qvfL4aT,w\"><field name=\"NAME1\">kunstnerId</field><value name=\"NAME\"><block type=\"column\" id=\"Uj//l~/7aWe#t5Bb)Po\"><field name=\"NAME1\">albumId</field></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"4;4geVi9.Jo+!?6#80)\"><field name=\"NAME1\">'Honey'</field><value name=\"NAME\"><block type=\"value\" id=\"e@U,d6*Nx(+pipFMWOr\"><field name=\"NAME1\">3</field><value name=\"NAME\"><block type=\"value\" id=\"(e0!XgDQ!R:-9iK^pz9_\"><field name=\"NAME1\">3</field></block></value></block></value></block></value><next><block type=\"create_table\" id=\"^hkgOn@OtpYCmDI5o4?\"><field name=\"NAME\">albums</field><statement name=\"NAME\"><block type=\"add_dropdown_column\" id=\"Rr+/npB?8~#;5|za%\"><field name=\"NAME\">albumId</field><field name=\"NAME2\">INTEGER PRIMARY KEY</field><next><block type=\"add_dropdown_column\" id=\"9CEGU@!O*_r(,,GaWui7\"><field name=\"NAME\">album</field><field name=\"NAME2\">TEXT</field></block></next></block></statement><next><block type=\"insert_into_with_columns\" id=\"k;9#BqKoI^yYdg-=%~9\"><field name=\"table_NAME\">albums</field><value name=\"COLUMNS\"><block type=\"column\" id=\"jknma$d?RBT9|h)M9.\"><field name=\"NAME1\">album</field></block></value><value name=\"VALUES\"><block type=\"value\" id=\"3v.W?RR*zhmj7h$X^h.4\"><field name=\"NAME1\">'Settle'</field></block></value><next><block type=\"insert_into_with_columns\" id=\"$AdBe)s~,DVzd:jAP\"><field name=\"table_NAME\">albums</field><value name=\"COLUMNS\"><block type=\"column\" id=\"Jp?w!P.Yez,6R/+=JrR\"><field name=\"NAME1\">album</field></block></value><value name=\"VALUES\"><block type=\"value\" id=\"*/HefYC$kF@2wUyOr_\"><field name=\"NAME1\">'eternal sunshine'</field></block></value><next><block type=\"insert_into_with_columns\" id=\"*O!gLEZqZD8/:4im2FJ\"><field name=\"table_NAME\">albums</field><value name=\"COLUMNS\"><block type=\"column\" id=\"0YA=9MUm,|/~;1n/!yqI\"><field name=\"NAME1\">album</field></block></value><value name=\"VALUES\"><block type=\"value\" id=\"z_g:*90hD))S1X@VgN-\"><field name=\"NAME1\">'Brothers'</field></block></value><next><block type=\"insert_into_with_columns\" id=\"j*n.?;:yK+fer20Y+bs\"><field name=\"table_NAME\">albums</field><value name=\"COLUMNS\"><block type=\"column\" id=\"EA;Va*y*g0_TLh=fgC\"><field name=\"NAME1\">album</field></block></value><value name=\"VALUES\"><block type=\"value\" id=\"*|0zAic~A6+bo!m*kHKH\"><field name=\"NAME1\">'Jonah Blacksmith'</field></block></value><next><block type=\"create_table\" id=\"N4EXe,k20;p%=4aqM0\"><field name=\"NAME\">kunstnere</field><statement name=\"NAME\"><block type=\"add_dropdown_column\" id=\"9tlNFA2H~3-Ofq!!=qr5\"><field name=\"NAME\">kunstnerId</field><field name=\"NAME2\">INTEGER PRIMARY KEY</field><next><block type=\"add_dropdown_column\" id=\"B@Y5IimoTyEb2g,?BFtq\"><field name=\"NAME\">navn</field><field name=\"NAME2\">TEXT</field></block></next></block></statement><next><block type=\"insert_into_with_columns\" id=\"+.%CqPm@ie^sSWZ:Yq\"><field name=\"table_NAME\">kunstnere</field><value name=\"COLUMNS\"><block type=\"column\" id=\"UsF3.D0F)-R:!H;*\"><field name=\"NAME1\">navn</field></block></value><value name=\"VALUES\"><block type=\"value\" id=\"2YK7YC@%X!Eu8#z*f1V\"><field name=\"NAME1\">'Ariana Grande'</field></block></value><next><block type=\"insert_into_with_columns\" id=\"n,_Z61fYKgt=*mdy~q\"><field name=\"table_NAME\">kunstnere</field><value name=\"COLUMNS\"><block type=\"column\" id=\"$%rOZY4UG@Ec45G69B#\"><field name=\"NAME1\">navn</field></block></value><value name=\"VALUES\"><block type=\"value\" id=\"M8TP|VVFmMIR~m9MvEdS\"><field name=\"NAME1\">'Disclosure feat. Sam Smith'</field></block></value><next><block type=\"insert_into_with_columns\" id=\"-OKukF%GBLD9CE,#E@H\"><field name=\"table_NAME\">kunstnere</field><value name=\"COLUMNS\"><block type=\"column\" id=\"Z5Z2KrxNr.6:y?v?C0#y\"><field name=\"NAME1\">navn</field></block></value><value name=\"VALUES\"><block type=\"value\" id=\"3Ule~ctu?xz4b*UO^0t\"><field name=\"NAME1\">'Jonah Blacksmith'</field></block></value><next><block type=\"insert_into_with_columns\" id=\"-M9xm8T1lbgr?ItpD%f|\"><field name=\"table_NAME\">kunstnere</field><value name=\"COLUMNS\"><block type=\"column\" id=\"I/$EZH!%7eU;7FE#IZqk\"><field name=\"NAME1\">navn</field></block></value><value name=\"VALUES\"><block type=\"value\" id=\"H6NPU-8e+MRyx,F?PU@7\"><field name=\"NAME1\">'Christopher'</field></block></value></xml>`}
        toolBox={
          <>
            <Block type="create_table" />
            <Block type="add_dropdown_column" />
            <Block type="insert_into_with_columns">
              <Value name="VALUES">
                <Block type="value">
                  <Field name="NAME1"></Field>
                </Block>
              </Value>
            </Block>
            <Block type="column" />
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
            <Block type="aggregate" />
            <Block type="as" />
            <Block type="join" />
            <Block type="where" />
            <Block type="comparison" />
            <Block type="and_or" />
            <Block type="in">
              <Value name="NAME">
                <Block type="list_item">
                  <next>
                    <Block type="list_item"></Block>
                  </next>
                </Block>
              </Value>
            </Block>
            <Block type="list_item" />
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
