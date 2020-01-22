import React from 'react';

import { TouchableElementProps } from '~/components/root/types';
import { Button } from './styles';

const Touchable: React.FC<TouchableElementProps> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

Touchable.defaultProps = {
  variant: 'secondary',
};

export default React.memo(Touchable);
