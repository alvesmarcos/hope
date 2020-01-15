import React from 'react';

import { Touchable, Label } from './styles';
import { Variants } from '~/styles/variants';
import { colors } from '~/styles';

interface IButtonProps {
  text: string;
  variant: Variants;
}

const Button: React.FC<IButtonProps> = ({ text, variant, ...rest }) => {
  let background, borderColor, color;

  switch (variant) {
    case Variants.PRIMARY:
      background = colors.primary;
      borderColor = colors.primaryDark;
      color = colors.white;
      break;
    case Variants.SECONDARY:
      background = colors.white;
      borderColor = colors.white;
      color = colors.primary;
      break;
    case Variants.ACCENT:
      background = colors.white;
      borderColor = colors.white;
      color = colors.black;
      break;

    default:
      break;
  }

  return (
    <Touchable
      background={background}
      borderColor={borderColor}
      {...rest}>
      <Label color={color}>{text}</Label>
    </Touchable>
  );
};

export default React.memo(Button);
