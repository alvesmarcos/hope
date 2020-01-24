import React from 'react';

import navService from '~/services/NavigationService';
import LayoutIntro from './Layout';
import data from './data';

const Intro: React.FC = () => {
  function onPressButton(id: number) {
    const currentItem = data.find(item => item.id === id);

    if (currentItem?.isLast) {
      navService.push('Home');
    }
  }

  return <LayoutIntro data={data} onPress={onPressButton} />;
};

export default Intro;
