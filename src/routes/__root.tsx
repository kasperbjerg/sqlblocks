import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import React from 'react';
import logo from '/logo.svg';
import LinkWithColorChange from '../Blockly/LinkWithColorChange.jsx';

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="sans-serif min-h-16 bg-gray-200">
        <p className="absolute end-40 top-2 text-gray-500">
          Energypoints: {localStorage.getItem('energyPoints')}
        </p>
        <img src={logo} className="relative left-8" alt="SQLBLOCKS logo" />
      </header>
      <div className="relative top-4 grid grid-cols-7 gap-4">
        <div className="min-w-120 col-span-1 indent-8">
          <div className="grid gap-2 p-2">
            <LinkWithColorChange
              name="indkoeb"
              Name="Indkøbsliste"
              color="text-sky-800/75"
            />
            <LinkWithColorChange
              name="reality"
              Name="Reality"
              color="text-purple-900/75"
            />
            <LinkWithColorChange
              name="yndlingsserier"
              Name="Yndlingsserier"
              color="text-teal-700/75"
            />
            <LinkWithColorChange
              name="hunde"
              Name="Hunde"
              color="text-pink-600/75"
            />
            <LinkWithColorChange
              name="gaester"
              Name="Nye gæster"
              color="text-yellow-600/75"
            />
            <LinkWithColorChange
              name="projekt1"
              Name="Projekt"
              color="text-teal-700/75"
            />
          </div>
        </div>
        <Outlet />
      </div>
    </>
  ),
});
