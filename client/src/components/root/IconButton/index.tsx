import React from 'react';

import Touchable from '~/components/root/Touchable';
import { IconButtonElementProps } from '~/components/root/types';
import Icon from '~/components/root/Icon';

const IconButton: React.FC<IconButtonElementProps> = ({ name, ...rest }) => {
  return (
    <Touchable {...rest}>
      <Icon name={name} {...rest} />
    </Touchable>
  );
};

IconButton.defaultProps = {
  fontSize: 'large',
};

export default React.memo(IconButton);
