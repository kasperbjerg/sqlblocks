import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import React from 'react';
import logo from '/logo.svg';
import badge from '/badge-svgrepo-com.svg';
import LinkWithColorChange from '../Blockly/LinkWithColorChange.jsx';

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="h-20 bg-gray-200">
        <div className="flex flex-row justify-between">
          <img src={logo} className="pl-4" alt="SQLBLOCKS logo" />
          <div className="flex flex-col pr-2 pt-1">
            <div className="flex justify-end">
              <p className=" text-gray-500 ">
                Energypoints: {localStorage.getItem('energyPoints')}
              </p>
            </div>
            <div className="flex flex-row justify-end">
              {/* div container for badges */}
              <img src={badge} className="h-8" alt="Badge" />
              <img src={badge} className="h-8" alt="Badge" />
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-row flex-nowrap pt-2">
        <div className="basis-40 pl-4">
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
        <Outlet />
      </div>
    </>
  ),
});
