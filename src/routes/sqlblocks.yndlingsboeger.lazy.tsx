import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Yndlingsboeger from '../Blockly/Yndlingsboeger.jsx';

export const Route = createLazyFileRoute('/sqlblocks/yndlingsboeger')({
  component: About,
});

function About() {
  return (
    <>
      <Yndlingsboeger />
    </>
  );
}
