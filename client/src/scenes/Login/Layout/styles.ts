import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';

import { metrics, colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  padding: ${scale(metrics.basePadding)}px;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  flex: 0.5;
  justify-content: flex-end;
`;
