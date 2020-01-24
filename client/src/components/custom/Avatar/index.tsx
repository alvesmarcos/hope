import React from 'react';
import { ImageProps } from 'react-native';

import { Image } from './styles';

interface AvatarElementProps extends ImageProps {
  size: number;
}

const Avatar: React.FC<AvatarElementProps> = ({ size, ...rest }) => {
  return <Image size={size} {...rest} />;
};

export default React.memo(Avatar);
