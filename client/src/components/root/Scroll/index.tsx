import React from 'react';

import { ScrollElementProps } from '~/components/root/types';
import { Box } from './styles';

const Scroll: React.FC<ScrollElementProps> = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>;
};

Scroll.defaultProps = {
  backgroundColor: 'paper',
  flexGrow: 1,
};

export default React.memo(Scroll);
