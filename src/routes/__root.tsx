import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import React from 'react';
import logo from '/logo.svg';
import badgeTest from '/badges/badge-svgrepo-com.svg';
import badgeFirstVideo from '../../public/badges/badgeFirstVideo.svg';
import LinkWithColorChange from '../Blockly/LinkWithColorChange.jsx';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="">
        <header className="h-20 min-w-[1180px] bg-gray-200">
          <div className="flex flex-row justify-between">
            <img src={logo} className="pb-2 pl-4" alt="SQLBLOCKS logo" />
            <div className="flex flex-col pr-4 pt-1">
              <div className="flex justify-end">
                <p className=" text-gray-500 ">
                  Energypoints: {localStorage.getItem('energyPoints')}
                </p>
              </div>
              <div className="pt flex flex-row justify-end">
                {/* div container for badges */}
                <div>
                  <img src={badgeTest} className="h-10" alt="Badge" />
                </div>
                <div className="duration-250 transition ease-out hover:scale-[2.5] hover:animate-pulse">
                  <img src={badgeFirstVideo} className="h-10" alt="Badge" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-row flex-nowrap pt-2">
          <div className="min-w-40 basis-1/6 space-y-1 pl-4 text-lg">
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
      </div>
    </>
  ),
});
