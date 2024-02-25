import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Bogliste from '../Blockly/Bogliste.jsx';

export const Route = createLazyFileRoute('/sqlblocks/bogliste')({
  component: About,
});

function About() {
  return (
    <>
      <Bogliste />
    </>
  );
}
