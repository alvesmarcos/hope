import React from 'react';

import { TextElementProps } from '~/components/root/types';
import { Label } from './styles';

const Text: React.FC<TextElementProps> = ({ children, ...rest }) => {
  return <Label {...rest}>{children}</Label>;
};

Text.defaultProps = {
  fontFamily: 'body',
  color: 'dark',
  fontSize: 'medium',
};

export default React.memo(Text);
