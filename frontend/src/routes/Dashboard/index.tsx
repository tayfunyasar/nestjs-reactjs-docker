import React from 'react';

import WithToggle from 'components/toggle.hoc';
import AddMobile from 'components/mobile';

export const Dashboard: React.FC = () => {

  const MobileWithToggle = WithToggle(AddMobile);

  return (
    <MobileWithToggle />
  )
}
