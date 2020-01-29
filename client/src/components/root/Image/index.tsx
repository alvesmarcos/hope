import React from 'react';
import { ImageProps } from 'react-native';

import { BoxImage } from './styles';

const Image: React.FC<ImageProps> = props => {
  return <BoxImage {...props} />;
};

export default React.memo(Image);
