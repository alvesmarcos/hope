import React from 'react';

import { TouchableElementProps } from '~/components/root/types';
import { Button } from './styles';

const Touchable: React.FC<TouchableElementProps> = ({ children, ...rest }) => {
  return <Touchable {...rest}>{children}</Touchable>;
};

Button.defaultProps = {
  variant: 'secondary',
};

export default React.memo(Button);
