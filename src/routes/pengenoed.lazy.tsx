import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';
import { useLocalStorage } from '@uidotdev/usehooks';

export const Route = createLazyFileRoute('/pengenoed')({
  component: About,
});

function About() {
  const [sommerfestXml, setSommerfestXml] = useLocalStorage(
    'sommerfestWorkspace',
    `
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `,
  );

  return (
    <>
      <Exercise
        exercise={'pengenoed'}
        nextExercise={'sygdom'}
        description={
          <>
            <p>
              Selvom Jespers fætter jo har sagt ja til at være gratis DJ, har
              drengene fundet ud af at det er for dyrt med vildmarksbad og telt,
              så de to rækker skal væk igen. Store Lars vil også hellere stå som{' '}
              <b>Lars M</b>. Lav ændringerne til tabellen ved at tilføje to
              DELETE-blokke og én UPDATE-blok (ud over den der allerede står fra
              sidste opgave) og vis alle kolonner til sidst.
            </p>
          </>
        }
        hint={'Ingen ændringer i INSERT INTO!!'}
        feedbackText={
          <>
            <p className="text-[#bf49a4]">Jeps, ret nemt ikke?</p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={[
          ['UPDATEsommerfestSETansvarlig='],
          ['WHEREansvarlig='],
          ['SELECT*FROMsommerfest'],
          ['DELETEFROMsommerfestWHERE'],
        ]}
        completeConditionsTableInfo={[['']]}
        completeConditionsResult={[
          [
            '[{"opgave":"Køb chips","ansvarlig":"Lars M","budget":200},{"opgave":"Bestil DJ","ansvarlig":"Jesper","budget":0},{"opgave":"Drikkevarer","ansvarlig":"Lars M","budget":300},{"opgave":"Lav invitationer","ansvarlig":"Lars K","budget":0}]',
          ],
        ]}
        initialXml={sommerfestXml}
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
