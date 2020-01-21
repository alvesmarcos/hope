import React from 'react';

import { ContainerElementProps } from '~/components/root/types';
import { Box } from './styles';

const Container: React.FC<ContainerElementProps> = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>;
};

Container.defaultProps = {
  size: 'full',
  backgroundColor: 'paper',
};

export default React.memo(Container);
