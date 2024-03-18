import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import React from 'react';
import logo from '/logo.svg';
import LinkWithColorChange from '../components/LinkWithColorChange.jsx';
import Badge from '../components/Badge.jsx';
import Energypoints from '../components/Energypoints.jsx';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="">
        <header className="h-20 min-w-[1220px] bg-[#e4e4e4]">
          <div className="flex flex-row justify-between">
            <Link to={'/'} className=" [&.active]:font-bold">
              <img src={logo} className="pb-2 pl-4" alt="SQLBLOCKS logo" />
            </Link>
            <div className="flex flex-row pt-4">
              <div className="flex flex-row justify-end">
                <Badge
                  badgeName={'projekt.svg'}
                  conditionsArray={[
                    JSON.parse(localStorage.getItem('projekt1Complete')),
                  ]}
                />
                <Badge
                  badgeName={'tabel.svg'}
                  conditionsArray={[
                    JSON.parse(localStorage.getItem('hundeComplete')),
                  ]}
                />
                <Badge
                  badgeName={'video.svg'}
                  conditionsArray={[
                    JSON.parse(localStorage.getItem('indkoebComplete')),
                  ]}
                />
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
              <div className="flex justify-end pt-1">
                <div className="pr-2">
                  <p className="pr-2 text-lg text-[#D0664f] ">
                    <Energypoints />
                  </p>
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
              color="text-sky-800/75"
            />
            <LinkWithColorChange
              name="varer"
              Name="Nye varer"
              color="text-[#74a65b]"
            />
            <LinkWithColorChange
              name="film"
              Name="Film"
              color="text-purple-900/75"
            />
            <LinkWithColorChange
              name="millenium"
              Name="Millenium"
              color="text-teal-700/75"
            />
            <LinkWithColorChange
              name="rating"
              Name="Rating"
              color="text-pink-600/75"
            />
            <LinkWithColorChange
              name="pigefilm"
              Name="Pigefilm"
              color="text-[#5ba699]"
            />
            <LinkWithColorChange
              name="projekt2"
              Name="Projekt"
              color="text-[#805ba6]"
            />
            <LinkWithColorChange
              name="priser"
              Name="Priser"
              color="text-[#a65b99]"
            />
            <LinkWithColorChange
              name="sommerfest"
              Name="Sommerfest"
              color="text-[#a6a65b]"
            />
            <LinkWithColorChange
              name="pengenoed"
              Name="Pengenød"
              color="text-[#bf49a4]"
            />
            <LinkWithColorChange
              name="sygdom"
              Name="Sygdom"
              color="text-[#74a65b]"
            />
            <LinkWithColorChange
              name="afbud"
              Name="Afbud"
              color="text-[#D0664f]"
            />
            <LinkWithColorChange
              name="projekt3"
              Name="Projekt"
              color="text-[#b04a4a]"
            />
          </div>
          <Outlet />
        </div>
      </div>
    </>
  ),
});
