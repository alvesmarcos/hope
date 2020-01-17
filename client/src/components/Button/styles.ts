import styled from 'styled-components/native';
import {
  borderColor,
  background,
  color,
  BackgroundProps,
  BorderColorProps,
  ColorProps,
} from 'styled-system';
import { scale, moderateScale } from 'react-native-size-matters';

import { metrics, fonts } from '~/styles';

export const Touchable = styled.TouchableOpacity<
  BackgroundProps | BorderColorProps
>`
  padding: ${scale(metrics.basePadding)}px;
  justify-content: center;
  align-items: center;
  border-width: ${scale(1)}px;
  border-radius: ${scale(metrics.baseRadius)}px;
  ${background};
  ${borderColor};
`;

export const Label = styled.Text<ColorProps>`
  font-size: ${moderateScale(18, metrics.fontFactor)}px;
  font-family: ${fonts.primary};
  ${color};
`;
