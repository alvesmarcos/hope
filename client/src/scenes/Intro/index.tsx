import React from 'react';

import navService from '~/services/NavigationService';
import LayoutIntro from './Layout';
import data from './data';

const Intro: React.FC = () => {
  function onPressButton() {
    navService.push('Home');
  }

  return <LayoutIntro data={data} onPress={onPressButton} />;
};

export default Intro;
