import styled from 'styled-components/native';
import { scale, moderateScale } from 'react-native-size-matters';

import { colors, metrics } from '~/styles';

// MARK: - Components

export const ContainerSlider = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.purple[700]};
  padding: ${scale(metrics.basePadding)}px;
`;

export const Title = styled.Text`
  font-size: ${moderateScale(28, 0.3)}px;
  color: ${colors.white};
  margin-top: ${scale(metrics.basePadding * 2)}px;
  margin-bottom: ${scale(metrics.basePadding)}px;
`;

export const Description = styled.Text`
  font-size: ${moderateScale(16, 0.3)}px;
  color: ${colors.white};
  text-align: center;
`;
