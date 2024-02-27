import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Yndlingsserier from '../blockly/Yndlingsserier.jsx';

export const Route = createLazyFileRoute('/yndlingsserier')({
  component: About,
});

function About() {
  return (
    <>
      <Yndlingsserier />
    </>
  );
}
