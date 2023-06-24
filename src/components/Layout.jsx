import { Suspense } from 'react';
import {AppBarComp } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <AppBarComp />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
