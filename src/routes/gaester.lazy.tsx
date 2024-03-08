import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block } from '../components';

import { useLocalStorage } from '@uidotdev/usehooks';

export const Route = createLazyFileRoute('/gaester')({
  component: About,
});

function About() {
  const [hundeXml, sethundeXml] = useLocalStorage('hundeWorkspace', false);
  return (
    <>
      <Exercise
        exercise={'gaester'}
        description={
          <>
            <p className="text-1xl">
              Din sql-kode fra sidste opgave er nedenfor. (Hvis ikke så skal du
              lige klikke her på start forfra-knappen i bunden).
            </p>
            <p>
              Anne har hørt om projektet og vil være med, men hun er mere til
              katte så foreslår at tabellen skal hedde <b>kæledyr</b>.{' '}
            </p>
            <p>
              Hun også have med hvor mange gange dyrene skal fodres og har selv
              Nuser på 7 år som skal fodres 3 gange.
            </p>
            <p>
              Thea, hendes veninde, har 1-årige Rasmus. Tilpas tabellen og find
              selv på hvis du mangler oplysninger.
            </p>
          </>
        }
        feedbackText={
          <>
            <p className="text-yellow-600/75  ">Fantastisk</p>
          </>
        }
        nextButtonColor={`purple-900/75`}
        completeConditionsSql={['dyr', 'user', 'odre', 'ea', '7', '3', '1']}
        completeConditionsResult={['asmu']} //to make sure the code is running
        completeConditionsTableInfo={['']} //Bruteforce-like-method for checking that the amount of rows is meet, ugly but it works so far, put in '3 rækker', '4 rækker' ...
        initialXml={hundeXml}
        toolBox={
          <>
            <Block type="create_table" />
            <Block type="add_integer_column" />
            <Block type="add_text_column" />
            <Block type="insert_into_only_values" />
            <Block type="value" />
            <Block type="select_*" />
          </>
        }
      />
    </>
  );
}
