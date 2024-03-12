import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Video from '../components/Video.jsx';

export const Route = createLazyFileRoute('/varer')({
  component: About,
});

function About() {
  return (
    <>
      <Video
        exercise={'varer'}
        nextExercise={'film'}
        videoUrl={'https://youtu.be/WeNeMjnM5gc'}
        description={
          <>
            <p>
              Vi skal se på hvordan man kan udvælge enkelte kolonner og sortere
              alfabetisk eller efter tal.
            </p>
            <p>
              Man også filtrere tabellerne på andre måder hvilket vi også
              begynder på at arbejde med her.
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
              Så er du ved at klar til at gå i gang :)
            </p>
          </>
        }
      />
    </>
  );
}
