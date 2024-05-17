import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Exercise from '../components/Exercise.jsx';
import { Block, Field, Value } from '../components/index.js';
import { useLocalStorage } from '@uidotdev/usehooks';
import { Link } from '@tanstack/react-router';
import Energypoints from '../components/Energypoints.jsx';
import Badge from '../components/Badge.jsx';

export const Route = createLazyFileRoute('/learn/theend')({
  component: About,
});

function About() {
  return (
    <>
      <div className="flex flex-col pl-6">
        <div className="w-[1024px]">
          <p>
            Du klarede det!
            <br />
            Der er ikke flere instruktionsvideoer eller øvelser på SQLBLOCKS..
            godt arbejde!
            <br />
            <br />I alt har du optjent{' '}
            <span className=" text-[#D0664f] ">
              {' '}
              <Energypoints /> energypoints
            </span>{' '}
            <br />
            og fået nedenstående badges
            <br />
            <br />
            <div className="flex flex-row">
              <Badge
                badgeName={'projekt.svg'}
                conditionsArray={[
                  JSON.parse(localStorage.getItem('projekt1Complete')),
                ]}
              />
              <Badge
                badgeName={'tabel.svg'}
                conditionsArray={[
                  JSON.parse(localStorage.getItem('hundeComplete')),
                ]}
              />
              <Badge
                badgeName={'video.svg'}
                conditionsArray={[
                  JSON.parse(localStorage.getItem('indkoebComplete')),
                ]}
              />
              <Badge
                badgeName={'badge5000.svg'}
                conditionsArray={[localStorage.getItem('energyPoints') > 4999]}
              />
              <Badge
                badgeName={'badge2000.svg'}
                conditionsArray={[localStorage.getItem('energyPoints') > 1999]}
              />

              <Badge
                badgeName={'badge1000.svg'}
                conditionsArray={[localStorage.getItem('energyPoints') > 999]}
              />
              <Badge
                badgeName={'badge500.svg'}
                conditionsArray={[localStorage.getItem('energyPoints') > 499]}
              />
              <Badge
                badgeName={'badge200.svg'}
                conditionsArray={[localStorage.getItem('energyPoints') > 199]}
              />
              <Badge
                badgeName="badge100.svg"
                conditionsArray={[localStorage.getItem('energyPoints') > 99]}
              />
            </div>
            <br />
            Det kan være der stadig er flere point eller badges at finde..
            <br />
            Du kan se om du mangler nogle af opgaverne ved at tjekke om de er
            blevet farvede i i menuen til venstre
            <br />
            <br />
            Hvis du skal til eksamen kan du få brug for at lave en ny SQLBLOCKS
            database fra bunden og præsentere den
            <br />
            hvilket du kan gøre på nedenstående link
            <br />
            <br />
            <button className="rounded-md bg-[#805ba6] p-2 text-white">
              <Link to={'/presentation/1'}>Ny SQLBLOCKS database</Link>
            </button>
            <br />
            <br />
            Happy Coding!
            
          </p>
        </div>
      </div>
    </>
  );
}
