import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Video from '../components/Video.jsx';

export const Route = createLazyFileRoute('/indkoeb')({
  component: About,
});

function About() {
  return (
    <>
      <Video
        isCompleteKey={'indkoebComplete'}
        nextExercise={'reality'}
        videoUrl={'https://youtu.be/Ni75V0WUavE'}
        description={
          <>
            <p className="text-1xl">"Husk mælk og tandpasta!!"</p>
            <br></br>
            <p>
              Jeg vil lave en tabel til at huske at købe chips og cola, se
              hvordan i videoen.
            </p>
            <p>Husk at sætte lyd på</p>
          </>
        }
        feedbackText={
          <>
            <p className="text-sky-800/75">
              Super, så er du klar til at gå i gang :) Klik her for dit første
              badge!
            </p>
          </>
        }
      />
    </>
  );
}
