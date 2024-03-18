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
      <Outlet />
    </>
  ),
});
