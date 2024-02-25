import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Bogliste from '../Blockly/Bogliste.jsx';
import Dagligvarer from '../Blockly/Dagligvarer.jsx';

export const Route = createLazyFileRoute('/sqlblocks/dagligvarer')({
  component: About,
});

function About() {
  return (
    <>
      <Dagligvarer />
    </>
  );
}
