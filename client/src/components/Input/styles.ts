import styled from 'styled-components/native';
import { moderateScale, scale } from 'react-native-size-matters';

import { metrics, fonts } from '~/styles';

export const TextInput = styled.TextInput`
  margin-top: ${scale(metrics.baseMargin * 2)}px;
  font-size: ${moderateScale(18, metrics.fontFactor)}px;
  font-family: ${fonts.primary};
  padding: 0;
`;
