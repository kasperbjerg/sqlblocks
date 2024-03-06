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
      />
    </>
  );
}
