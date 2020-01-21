import React from 'react';

import { InputElementProps } from '../types';
import { TextInput } from './styles';

const Input: React.FC<InputElementProps> = props => {
  return <TextInput {...props} />;
};

Input.defaultProps = {
  fontSize: 'medium',
  fontFamily: 'body',
};

export default React.memo(Input);
