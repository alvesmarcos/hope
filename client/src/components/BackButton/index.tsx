import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { scale } from 'react-native-size-matters';

const BackButton: React.FC = (...props) => {
  return (
    <TouchableOpacity {...props}>
      <Icon name="arrow-left" size={scale(24)} />
    </TouchableOpacity>
  );
};

export default React.memo(BackButton);
