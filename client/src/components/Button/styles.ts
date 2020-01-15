import styled from 'styled-components/native';
import { borderColor, background, color } from 'styled-system';
import { scale, moderateScale } from 'react-native-size-matters';

import { metrics, fonts } from '~/styles';

interface IButtonProps {
  background: string;
  borderColor: string;
}

interface ILabelProps {
  color: string;
}

export const Touchable = styled.TouchableOpacity<IButtonProps>`
  padding: ${scale(metrics.basePadding)}px;
  justify-content: center;
  align-items: center;
  border-width: ${scale(1)}px;
  border-radius: ${scale(metrics.baseRadius)}px;
  ${background};
  ${borderColor};
`;

export const Label = styled.Text<ILabelProps>`
  font-size: ${moderateScale(18, metrics.fontFactor)}px;
  font-family: ${fonts.primary};
  ${color};
`;
