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
        exercise={'indkoeb'}
        nextExercise={'reality'}
        videoUrl={'https://youtu.be/WeNeMjnM5gc'}
        description={
          <>
            <p>"Husk mælk og tandpasta!!"</p>
            <p>
              Det er let at lave indkøbsliste, så man husker at købe chips og
              cola. Se hvordan i videoen nedenfor.
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
            <p className="text-[#5b80a6]">
              Super, så er du ved at klar til at gå i gang :)
            </p>
          </>
        }
      />
    </>
  );
}
