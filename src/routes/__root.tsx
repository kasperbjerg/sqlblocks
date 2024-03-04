import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import React from 'react';
import logo from '/logo.svg';
import LinkWithColorChange from '../Blockly/LinkWithColorChange.jsx';
import Badge from '../Blockly/Badge.jsx';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="">
        <header className="h-20 min-w-[1180px] bg-gray-200">
          <div className="flex flex-row justify-between">
            <img src={logo} className="pb-2 pl-4" alt="SQLBLOCKS logo" />
            <div className="flex flex-col pt-1">
              <div className="flex justify-end ">
                <div className="pr-2">
                  <p className=" pr-2 text-yellow-600/75 ">
                    Energypoints: {localStorage.getItem('energyPoints')}
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-end pt-1">
                <Badge
                  badgeName={'badge5000.svg'}
                  conditionsArray={[
                    localStorage.getItem('energyPoints') > 4999,
                  ]}
                />
                <Badge
                  badgeName={'badge2000.svg'}
                  conditionsArray={[
                    localStorage.getItem('energyPoints') > 1999,
                  ]}
                />

                <Badge
                  badgeName={'badge1000.svg'}
                  conditionsArray={[localStorage.getItem('energyPoints') > 999]}
                />
                <Badge
                  badgeName={'badge500.svg'}
                  conditionsArray={[localStorage.getItem('energyPoints') > 499]}
                />
                <Badge
                  badgeName={'badge200.svg'}
                  conditionsArray={[localStorage.getItem('energyPoints') > 199]}
                />
                <Badge
                  badgeName="badge100.svg"
                  conditionsArray={[localStorage.getItem('energyPoints') > 99]}
                />
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
