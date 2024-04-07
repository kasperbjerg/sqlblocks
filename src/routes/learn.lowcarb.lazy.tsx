import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Video from '../components/Video.jsx';

export const Route = createLazyFileRoute('/learn/lowcarb')({
  component: About,
});

function About() {
  return (
    <>
      <Video
        exercise={'lowcarb'}
        nextExercise={'traening'}
        videoUrl={'https://youtu.be/8HQrVEGIfSo'}
        description={
          <>
            <p>Der er kommet endnu flere blokke frem nu.
              Denne video handler om mere kompliceret filtrering med <b>AND</b>{' '}
              og <b>OR</b>. <br/>
              Vi ser også på blokken <b>IN</b> der kan tjekke om værdier er i en liste eller i indlejrede <b>SELECT</b>
              -underforespørgsler. <br/>Til sidst introduceres også blokkene <b>GROUP BY</b> og <b>HAVING</b> samt aggregeringsfunktioner som <b>SUM</b>, <b>MAX</b>, <b>MIN</b> og <b>AVG</b>.
            </p>
          </>
        }
        hint={
          <p>
            Hint: Du skal se videoen med lyd på for at kunne lave øvelserne
            bagefter.
          </p>
        }
        feedbackText={
          <>
            <p className="text-[#74a65b]">
              Super, så er du ved at klar til at gå i gang :)
            </p>
          </>
        }
      />
    </>
  );
}
