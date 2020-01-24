import React from 'react';

import { TouchableElementProps } from '~/components/root/types';
import Touchable from '~/components/root/Touchable';
import Text from '~/components/root/Text';

const Button: React.FC<TouchableElementProps> = ({
  variant,
  children,
  ...rest
}) => {
  let textProps = { color: 'light' };

  /** to see all possibles variants go to styles/buttons */
  switch (variant) {
    case 'primary':
      textProps.color = 'light';
      break;
    case 'secondary':
      textProps.color = 'primary';
      break;
    case 'primaryLight':
      textProps.color = 'primary';
      break;
    default:
      break;
  }

  return (
    <Touchable variant={variant} {...rest}>
      <Text textAlign="center" {...textProps}>
        {children}
      </Text>
    </Touchable>
  );
};

Button.defaultProps = {
  variant: 'secondary',
  p: 'medium',
  borderWidth: 'thin',
  borderRadius: 'medium',
};

export default React.memo(Button);
