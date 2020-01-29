import React from 'react';
import { ColorProps } from 'styled-system';

import { Line } from './styles';

const Separator: React.FC<ColorProps> = props => {
  return <Line {...props} />;
};

Separator.defaultProps = {
  backgroundColor: 'primary',
};

export default React.memo(Separator);
