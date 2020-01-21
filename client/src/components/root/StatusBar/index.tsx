import React from 'react';
import { StatusBar as NativeStatusBar, StatusBarProps } from 'react-native';

import { StatusBarElementProps } from '~/components/root/types';
import colors from '~/styles/colors';

const StatusBar: React.FC<StatusBarElementProps> = ({ variant }) => {
  const localProps: StatusBarProps = {
    backgroundColor: colors.light,
    barStyle: 'dark-content',
  };

  switch (variant) {
    case 'primary':
      localProps.backgroundColor = colors.primary;
      localProps.barStyle = 'light-content';
      break;
    case 'secondary':
      localProps.backgroundColor = colors.accent;
      localProps.barStyle = 'dark-content';
      break;
    default:
      break;
  }

  return <NativeStatusBar {...localProps} />;
};

StatusBar.defaultProps = {
  variant: 'primary',
};

export default React.memo(StatusBar);
