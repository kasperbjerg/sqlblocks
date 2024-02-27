import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import React from 'react';
import logo from '/logo.svg';

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="sans-serif min-h-16 bg-gray-200 text-3xl  text-white">
        <img src={logo} className="relative left-8" alt="SQLBLOCKS logo" />
      </header>
      <div className="relative top-4 grid grid-cols-7 gap-4">
        <div className="min-w-120 col-span-1 indent-8">
          <div className="grid gap-2 p-2">
            <Link to="/reality" className="[&.active]:font-bold">
              Reality
            </Link>
            <Link to="/yndlingsserier"className="[&.active]:font-bold">
              Yndlingsserier
            </Link>
            <Link to="/hunde" className="[&.active]:font-bold">
              Hunde
            </Link>
            <Link to="/gaester" className="[&.active]:font-bold">
              Nye gæster
            </Link>
            <Link to="/projekt1" className="[&.active]:font-bold">
              Projekt
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  ),
});
