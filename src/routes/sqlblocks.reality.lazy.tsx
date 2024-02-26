import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Reality from '../Blockly/Reality.jsx';

export const Route = createLazyFileRoute('/sqlblocks/reality')({
  component: About,
});

function About() {
  return (
    <>
      <Reality />
    </>
  );
}
