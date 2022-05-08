import React from 'react';

import WithToggle from './components/toggle.hoc';
import AddMobile from './components/mobile.add';
import MobileList from './components/mobile.list';

export const Mobile: React.FC = () => {

  const MobileWithToggle = WithToggle(AddMobile);

  return (
    <>
      <MobileWithToggle />
      <MobileList />
    </>
  )
}
