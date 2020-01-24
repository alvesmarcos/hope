import styled from 'styled-components/native';
import { ColorProps, color } from 'styled-system';

export const Line = styled.View<ColorProps>`
  ${color};
  height: 100%;
  width: 1px;
`;
