import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

import { LoadingElementProps } from '~/components/root/types';
import colors from '~/styles/colors';

const LoadingIndicator: React.FC<LoadingElementProps> = ({
  variant,
  ...rest
}) => {
  const localProps: ActivityIndicatorProps = {
    color: colors.light,
  };

  switch (variant) {
    case 'primary':
      localProps.color = colors.primary;
      break;
    case 'secondary':
      localProps.color = colors.accent;
      break;
    default:
      break;
  }

  return <ActivityIndicator {...localProps} {...rest} />;
};

LoadingIndicator.defaultProps = {
  variant: 'primary',
};

export default React.memo(LoadingIndicator);
