import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Video from '../components/Video.jsx';

export const Route = createLazyFileRoute('/priser')({
  component: About,
});

function About() {
  return (
    <>
      <Video
        exercise={'priser'}
        nextExercise={'sommerfest'}
        videoUrl={'https://youtu.be/L6vWHdl9JE4'}
        description={
          <>
            <p>
              I nedenstående video kommer du til at lære hvordan man kan ændre
              og slette i tabeller.
            </p>
            <p></p>
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
            <p className="text-[#a65b99]">
              Super, så er du ved at klar til at gå i gang :)
            </p>
          </>
        }
      />
    </>
  );
}
