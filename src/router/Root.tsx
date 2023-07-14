import { Outlet } from 'react-router-dom';

import Header from '../components/common/Header';

export function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
