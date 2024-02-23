import { Outlet, createLazyFileRoute } from '@tanstack/react-router';
import BlocklyApp from '../BlocklyApp.jsx';
import logo from '/logo.svg';
import React from 'react';

export const Route = createLazyFileRoute('/sqlblocks')({
  component: About,
});

function About() {
  return (
    <>
        <Outlet />
    </>
  );
}
