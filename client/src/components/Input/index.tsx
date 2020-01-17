import React from 'react';
import { TextInputProps } from 'react-native';

import { TextInput } from './styles';

const Input: React.FC<TextInputProps> = props => {
  return <TextInput {...props} />;
};

export default React.memo(Input);
