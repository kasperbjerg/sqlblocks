import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Gaester from '../blockly/Gaester.jsx';

export const Route = createLazyFileRoute('/gaester')({
  component: About,
});

function About() {
  return (
    <>
      <Gaester />
    </>
  );
}
