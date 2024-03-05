import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Indkoeb from '../components/Indkoeb.jsx';

export const Route = createLazyFileRoute('/indkoeb')({
  component: About,
});

function About() {
  return (
    <>
      <Indkoeb />
    </>
  );
}
