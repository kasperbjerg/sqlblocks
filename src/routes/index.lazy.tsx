import { Outlet, createLazyFileRoute } from '@tanstack/react-router';
import BlocklyApp from '../BlocklyApp.jsx';
import logo from '/logo.svg';
import React from 'react';

export const Route = createLazyFileRoute('/')({
  component: About,
});

function About() {
  return (
    <>
      <div className="relative top-2 col-span-5">
        <p>
          Velkommen til SQLBLOCKS! <br />
          Klik på opgaverne til venstre for at lære SQL
        </p>
      </div>
    </>
  );
}
