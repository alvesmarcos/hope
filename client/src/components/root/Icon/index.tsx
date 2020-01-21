import React from 'react';

import { IconElementProps } from '~/components/root/types';
import { Symbol } from './styles';

const Icon: React.FC<IconElementProps> = props => {
  return <Symbol {...props} />;
};

Icon.defaultProps = {
  color: 'dark',
  fontSize: 'medium',
};

export default React.memo(Icon);
