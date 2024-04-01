import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Video from '../components/Video.jsx';

export const Route = createLazyFileRoute('/learn/tabeller')({
  component: About,
});

function About() {
  return (
    <>
      <Video
        exercise={'tabeller'}
        nextExercise={'playlist'}
        videoUrl={'https://youtu.be/sqqNhxkIH-I'}
        description={
          <>
            <p>Nu bliver det lidt sværere!</p>
            <p>
              Vi skal se på hvordan man kan gemme data på en smart måde i flere
              tabeller der hænger sammen og få brugbare tabeller ud af
              databasen igen. <br></br>
              Du kommer til at høre om blokkene <b>INTEGER PRIMARY KEY</b>,{' '}
              <b>LIMIT</b>, <b>AS</b>, <b>INNER JOIN</b> og <b>LEFT JOIN</b>
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
            <p className="text-[#5b80a6]">
              Super, så er du ved at klar til at gå i gang :)
            </p>
          </>
        }
      />
    </>
  );
}
