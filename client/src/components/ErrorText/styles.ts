import styled from 'styled-components/native';
import { moderateScale, scale } from 'react-native-size-matters';

import { colors, metrics, fonts } from '~/styles';

export const Help = styled.Text`
  margin-top: ${scale(metrics.baseMargin)}px;
  font-size: ${moderateScale(14, metrics.fontFactor)}px;
  color: ${colors.red.a400};
  font-family: ${fonts.primary};
`;
