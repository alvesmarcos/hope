import React from 'react';

import { FlexElementProps } from '~/components/root/types';
import { Box } from './styles';

const Flex: React.FC<FlexElementProps> = ({ children, ...rest }) => {
  return <Box  {...rest}>{children}</Box>;
};

Flex.defaultProps = {
  flex: 1,
};

export default React.memo(Flex);
