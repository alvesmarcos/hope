import React from 'react';

import { IconElementProps } from '~/components/root/types';
import { SymbolFeather, SymbolFontAwesome } from './styles';

const Icon: React.FC<IconElementProps> = ({ variant, ...props }) => {
  let Icon = SymbolFeather;

  switch (variant) {
    case 'feather':
      Icon = SymbolFeather;
      break;
    case 'fontawesome':
      Icon = SymbolFontAwesome;
      break;
    default:
      break;
  }

  return <Icon {...props} />;
};

Icon.defaultProps = {
  variant: 'feather',
  color: 'dark',
  fontSize: 'medium',
};

export default React.memo(Icon);
