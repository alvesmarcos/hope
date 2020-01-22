import React, { useState } from 'react';

import navService from '~/services/NavigationService';
import data from './data';
import LayoutProfileLogin from './Layout';

const ProfileLogin: React.FC = () => {
  const [dataState, setDataState] = useState(data);

  function selectCard(id: number) {
    data.forEach(item => {
      item.actived = item.id === id;
    });
    setDataState([...data]);
  }

  function back() {
    navService.pop();
  }

  function next() {
    navService.push('Intro');
  }

  // render
  return (
    <LayoutProfileLogin
      data={dataState}
      onPressCard={selectCard}
      onPressBack={back}
      onPressNext={next}
    />
  );
};

export default ProfileLogin;
