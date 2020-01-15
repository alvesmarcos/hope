import styled from 'styled-components/native';
import { scale, moderateScale } from 'react-native-size-matters';

import { fonts, colors, metrics } from '~/styles';

export const ContainerSlider = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  padding: ${scale(metrics.basePadding)}px;
`;

export const Title = styled.Text`
  font-size: ${moderateScale(28, metrics.fontFactor)}px;
  font-family: ${fonts.primary};
  color: ${colors.white};
  margin-top: ${scale(metrics.basePadding * 2)}px;
  margin-bottom: ${scale(metrics.basePadding)}px;
`;

export const Description = styled.Text`
  font-size: ${moderateScale(18, metrics.fontFactor)}px;
  font-family: ${fonts.primary};
  color: ${colors.white};
  text-align: center;
`;
