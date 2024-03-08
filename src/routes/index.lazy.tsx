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
        <p className="text-xl">
          Velkommen til SQLBLOCKS! 
          </p>
          <p><br />
          <br />
          Klik på opgaverne til venstre for at begynde at lære SQL.
          <br />
          <br />
          Undervejs optjener du løbende energipoints og du får badges når du
          klarer specielle ting på siden.
        </p>
      </div>
    </>
  );
}
