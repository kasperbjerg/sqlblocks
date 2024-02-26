import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Projekt1 from '../Blockly/Projekt1.jsx';

export const Route = createLazyFileRoute('/sqlblocks/projekt1')({
  component: About,
});

function About() {
  return (
    <>
      <Projekt1 />
    </>
  );
}