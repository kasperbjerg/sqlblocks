import { createLazyFileRoute } from '@tanstack/react-router';
import BlocklyApp from '../BlocklyApp.jsx';
import logo from '/logo.svg';
import React from 'react';

export const Route = createLazyFileRoute('/dagligvarer')({
  component: About,
});

function About() {
  return (
    <>
      <div className="col-span-4">
        <p className="text-1xl">Her kan der stå opgaver</p>
        <BlocklyApp />
      </div>
    </>
  );
}
