import styled from 'styled-components/native';
import { moderateScale, scale } from 'react-native-size-matters';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
  padding: ${scale(metrics.basePadding)}px;
`;

export const Title = styled.Text`
  font-size: ${moderateScale(18, metrics.fontFactor)}px;
  font-family: ${fonts.primary};
`;

export const Bold = styled(Title)`
  font-family: ${fonts.primaryBold};
`;

export const Header = styled.View`
  flex: 0.5;
`;

export const Footer = styled.View`
  flex: 0.5;
  justify-content: flex-end;
`;

export const Margin = styled.View`
  margin: ${scale(metrics.baseMargin)}px;
`;
