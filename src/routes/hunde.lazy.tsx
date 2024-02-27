import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Hunde from '../Blockly/Hunde.jsx';

export const Route = createLazyFileRoute('/hunde')({
  component: About,
});

function About() {
  return (
    <>
      <Hunde />
    </>
  );
}
