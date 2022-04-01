import React from 'react';

import WithToggle from 'components/toggle.hoc';
import AddMobile from 'components/mobile.add';
import MobileList from 'components/mobile.list';

export const Dashboard: React.FC = () => {

  const MobileWithToggle = WithToggle(AddMobile);

  return (
    <>
      <MobileWithToggle />
      <MobileList />
    </>
  )
}
