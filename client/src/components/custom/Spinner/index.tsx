import React from 'react';
import SpinnerNative from 'react-native-loading-spinner-overlay';

import colors from '~/styles/colors';
import fonts from '~/styles/fonts';
import fontSizes from '~/styles/fontSizes';
import { unwrapperpx } from '~/styles/helpers';

interface SpinnerProps {
  text: string;
  visible: boolean;
  variant: 'primary' | 'secondary';
}

const Spinner: React.FC<SpinnerProps> = ({ visible, text, variant }) => {
  let localProps = {
    color: colors.primary,
    fontFamily: fonts.main,
    fontSize: unwrapperpx(fontSizes.medium),
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
  return (
    <SpinnerNative
      visible={visible}
      textContent={text}
      textStyle={localProps}
    />
  );
};

Spinner.defaultProps = {
  variant: 'primary',
  visible: false,
};

export default React.memo(Spinner);
