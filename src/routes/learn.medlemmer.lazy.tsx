import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';
import { useLocalStorage } from '@uidotdev/usehooks';

export const Route = createLazyFileRoute('/learn/medlemmer')({
  component: About,
});

function About() {
  return (
    <>
      <Exercise
        exercise={'medlemmer'}
        nextExercise={'tilmeldte'}
        description={
          <>
            <p></p>
          </>
        }
        hint={<p>Hint:</p>}
        feedbackText={
          <>
            <p className="text-[#5b80a6]">Så er du igang igen.. fedt!</p>
          </>
        }
        completeConditionsSql={[['']]}
        completeConditionsTableInfo={[['']]}
        completeConditionsResult={[['[{']]} //to make sure the code is running
        initialXml={`<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"run_sqlblocks\" id=\")$x:KTYWOND_BZzgZBH\" x=\"10\" y=\"10\"><next><block type=\"create_table\" id=\"N*x0/O_|MY+ZU!Xnt?Y\"><field name=\"NAME\">træning</field><statement name=\"NAME\"><block type=\"add_dropdown_column\" id=\"^kBs,e7Pkt!Hw;VgWB!(\"><field name=\"NAME\">id</field><field name=\"NAME2\">INTEGER PRIMARY KEY</field><next><block type=\"add_dropdown_column\" id=\"Ae0NawLYzVo!Ct+E#2f*\"><field name=\"NAME\">hold</field><field name=\"NAME2\">TEXT</field><next><block type=\"add_dropdown_column\" id=\"vUzxp+_KT*=#Ci6tZmO\"><field name=\"NAME\">kategori</field><field name=\"NAME2\">TEXT</field><next><block type=\"add_dropdown_column\" id=\"waW5hQdpduHuj%u?YwAI\"><field name=\"NAME\">varighed</field><field name=\"NAME2\">INTEGER</field><next><block type=\"add_dropdown_column\" id=\"WZy;SPp+4sETI9^L7tGV\"><field name=\"NAME\">tilmeldte</field><field name=\"NAME2\">INTEGER</field></block></next></block></next></block></next></block></next></block></statement><next><block type=\"insert_into_with_columns\" id=\"#QUlO;,iH_g@8Arpgy\"><field name=\"table_NAME\">træning</field><value name=\"COLUMNS\"><block type=\"column\" id=\";.WvOfDKTO_=qZouA18\"><field name=\"NAME1\">hold</field><value name=\"NAME\"><block type=\"column\" id=\"0O,W#.$@ooL_Q*:V$?\"><field name=\"NAME1\">kategori</field><value name=\"NAME\"><block type=\"column\" id=\"qb|Shly^E@X;SmQ2\"><field name=\"NAME1\">varighed</field><value name=\"NAME\"><block type=\"column\" id=\"hiWTKztqn-sJRny/h\"><field name=\"NAME1\">tilmeldte</field></block></value></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"RVkycRociOcyaC2m#:$\"><field name=\"NAME1\">'Ashtanga'</field><value name=\"NAME\"><block type=\"value\" id=\"Mu%Ox$2t8Uo5n7HU=4\"><field name=\"NAME1\">'Yoga'</field><value name=\"NAME\"><block type=\"value\" id=\"B6vbR9|t0Kp_JqY!9UX\"><field name=\"NAME1\">55</field><value name=\"NAME\"><block type=\"value\" id=\"1(/HrnH,xdg3thTni\"><field name=\"NAME1\">7</field></block></value></block></value></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\"j*Tg=vB^G(8-kI0N.H\"><field name=\"table_NAME\">træning</field><value name=\"COLUMNS\"><block type=\"column\" id=\"P5Z?|I#z?urL5wRpm:b\"><field name=\"NAME1\">hold</field><value name=\"NAME\"><block type=\"column\" id=\"f(jmwI3mzXvhM#.YX$p\"><field name=\"NAME1\">kategori</field><value name=\"NAME\"><block type=\"column\" id=\"_k76PFb15.@Bbl7K0L!\"><field name=\"NAME1\">varighed</field><value name=\"NAME\"><block type=\"column\" id=\"BDx.ma2^W(Rm-ll!iP:\"><field name=\"NAME1\">tilmeldte</field></block></value></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"fl7,T5(u|!KGI5-0Zrm\"><field name=\"NAME1\">'Cycling'</field><value name=\"NAME\"><block type=\"value\" id=\"Dl!O7wu1U.g$s=$14cD\"><field name=\"NAME1\">'Kondition'</field><value name=\"NAME\"><block type=\"value\" id=\"j_*L:GBjia:N()7HZ#G\"><field name=\"NAME1\">60</field><value name=\"NAME\"><block type=\"value\" id=\"*E!W+Y:i~^)W5gOjWSz\"><field name=\"NAME1\">15</field></block></value></block></value></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\"A2,,Y.(6:jtf*%7eix\"><field name=\"table_NAME\">træning</field><value name=\"COLUMNS\"><block type=\"column\" id=\"Mn.J*;mohrakhDLs=2\"><field name=\"NAME1\">hold</field><value name=\"NAME\"><block type=\"column\" id=\"-x#41T12zZ0IPzF3:3jJ\"><field name=\"NAME1\">kategori</field><value name=\"NAME\"><block type=\"column\" id=\"eC+=btJ)x^M|I*CE\"><field name=\"NAME1\">varighed</field><value name=\"NAME\"><block type=\"column\" id=\"(M!~8cD,Twq$eiTsGI\"><field name=\"NAME1\">tilmeldte</field></block></value></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"k.GwxK-!Ltb$WlaIOS6\"><field name=\"NAME1\">'Bootylicious'</field><value name=\"NAME\"><block type=\"value\" id=\"13yM+7OA5M+9Vi5pZ|V-\"><field name=\"NAME1\">'Styrke'</field><value name=\"NAME\"><block type=\"value\" id=\"^0~q3:l!26tffINaj1D\"><field name=\"NAME1\">30</field><value name=\"NAME\"><block type=\"value\" id=\"QFUJ%M!t4*Qn:2qrhW\"><field name=\"NAME1\">6</field></block></value></block></value></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\"qGrvRBUaNeL9OS#ieG+V\"><field name=\"table_NAME\">træning</field><value name=\"COLUMNS\"><block type=\"column\" id=\"_!5)B-x9p!,KmenMcqO5\"><field name=\"NAME1\">hold</field><value name=\"NAME\"><block type=\"column\" id=\"CnQTqqelx9I7o@T5IE8\"><field name=\"NAME1\">kategori</field><value name=\"NAME\"><block type=\"column\" id=\"G-PoM3I/L_a~|GuodKk\"><field name=\"NAME1\">varighed</field><value name=\"NAME\"><block type=\"column\" id=\"Gws2fy8QTHH@@aRC*SW\"><field name=\"NAME1\">tilmeldte</field></block></value></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"Y$bOWPa=KV(dp+*08sC\"><field name=\"NAME1\">'Indoor Running'</field><value name=\"NAME\"><block type=\"value\" id=\"AdCG,(0A.dEk;fssala@\"><field name=\"NAME1\">'Kondition'</field><value name=\"NAME\"><block type=\"value\" id=\"LUv)ZFiU$$o2bDrkqjH\"><field name=\"NAME1\">35</field><value name=\"NAME\"><block type=\"value\" id=\"gTOn^g4jVN+,yKsbvDS\"><field name=\"NAME1\">4</field></block></value></block></value></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\"uG70_t6-4xiz?O^Dyv\"><field name=\"table_NAME\">træning</field><value name=\"COLUMNS\"><block type=\"column\" id=\"tnA@,S=LZlg?APb$Q\"><field name=\"NAME1\">hold</field><value name=\"NAME\"><block type=\"column\" id=\"d0JO(5-r2BEEWFN5Bt^\"><field name=\"NAME1\">kategori</field><value name=\"NAME\"><block type=\"column\" id=\"(Lh9MiHVOvHuHpD-Tg.\"><field name=\"NAME1\">varighed</field><value name=\"NAME\"><block type=\"column\" id=\"h!)Zxn@Xr9;|Oj*03\"><field name=\"NAME1\">tilmeldte</field></block></value></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"21~W~_2Q~/Hw2akQq\"><field name=\"NAME1\">'Dance Aerobic'</field><value name=\"NAME\"><block type=\"value\" id=\"*CQ|*1(4?fU,6TW%=m\"><field name=\"NAME1\">'Dans'</field><value name=\"NAME\"><block type=\"value\" id=\"y_qYL%3V*ntLAJuI+PM\"><field name=\"NAME1\">75</field><value name=\"NAME\"><block type=\"value\" id=\"!tyq,-j/vo#v1R?;xPP\"><field name=\"NAME1\">8</field></block></value></block></value></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\";3YvL2godcRL/$mHXc5f\"><field name=\"table_NAME\">træning</field><value name=\"COLUMNS\"><block type=\"column\" id=\"Fh4Y*|A(B^ZDiomSpq(M\"><field name=\"NAME1\">hold</field><value name=\"NAME\"><block type=\"column\" id=\"~S5h8)hBUT/Qju.U~4v\"><field name=\"NAME1\">kategori</field><value name=\"NAME\"><block type=\"column\" id=\"/4X!cW|4Z)65bFbeW+u\"><field name=\"NAME1\">varighed</field><value name=\"NAME\"><block type=\"column\" id=\"m^Q2PN9tM/q$KaGOXS\"><field name=\"NAME1\">tilmeldte</field></block></value></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"k++qT.v%)G|l;zPjtFqB\"><field name=\"NAME1\">'Zumba'</field><value name=\"NAME\"><block type=\"value\" id=\"zQ*cQI)g:Yal/0o$RGT\"><field name=\"NAME1\">'Dans'</field><value name=\"NAME\"><block type=\"value\" id=\"4o!8tSg5BPi*WG^Om++\"><field name=\"NAME1\">45</field><value name=\"NAME\"><block type=\"value\" id=\":+d1dHc9E1+ws~@w$O@/\"><field name=\"NAME1\">10</field></block></value></block></value></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\"?yXeiY(6qshihWD1aj,\"><field name=\"table_NAME\">træning</field><value name=\"COLUMNS\"><block type=\"column\" id=\"e4uZ2~hw8ezsw4JvRc\"><field name=\"NAME1\">hold</field><value name=\"NAME\"><block type=\"column\" id=\"YA2yM.J/ZnxOv,h=5Z?U\"><field name=\"NAME1\">kategori</field><value name=\"NAME\"><block type=\"column\" id=\"q/6CM#lxJ_LD,FIL|++t\"><field name=\"NAME1\">varighed</field><value name=\"NAME\"><block type=\"column\" id=\"%W3;:L?JD1d@)5qd2(\"><field name=\"NAME1\">tilmeldte</field></block></value></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\"CJ!5n(:@yJ-h9^UA5+|\"><field name=\"NAME1\">'Vinyasa'</field><value name=\"NAME\"><block type=\"value\" id=\"72MNUYPqf!=N)7#2q-A\"><field name=\"NAME1\">'Yoga'</field><value name=\"NAME\"><block type=\"value\" id=\"10(ck2fCX.k3DhQRrNO\"><field name=\"NAME1\">70</field><value name=\"NAME\"><block type=\"value\" id=\"7IknKrDtl@p8%4D|m#MS\"><field name=\"NAME1\">13</field></block></value></block></value></block></value></block></value><next><block type=\"insert_into_with_columns\" id=\"B/;dZPt2wWukdo5@JMcN\"><field name=\"table_NAME\">træning</field><value name=\"COLUMNS\"><block type=\"column\" id=\"ji=#mtM8J9_+9=|_dQ\"><field name=\"NAME1\">hold</field><value name=\"NAME\"><block type=\"column\" id=\"#tu:LY$(FZc5bPci.P\"><field name=\"NAME1\">kategori</field><value name=\"NAME\"><block type=\"column\" id=\"mwY3136,WOr9^YK#.)c\"><field name=\"NAME1\">varighed</field><value name=\"NAME\"><block type=\"column\" id=\"XYS*_^B|n%NFhczN-ei\"><field name=\"NAME1\">tilmeldte</field></block></value></block></value></block></value></block></value><value name=\"VALUES\"><block type=\"value\" id=\";36~~l=eOQ|SkINa)/t^\"><field name=\"NAME1\">'Crosstraining'</field><value name=\"NAME\"><block type=\"value\" id=\"?AWE#%v3x.qmL(^aew/\"><field name=\"NAME1\">'Styrke'</field><value name=\"NAME\"><block type=\"value\" id=\"GYj9,:6+$WkYXOcIRke\"><field name=\"NAME1\">60</field><value name=\"NAME\"><block type=\"value\" id=\"2*NPsBS(s3:iBlbbW\"><field name=\"NAME1\">7</field></block></value></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`}
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
