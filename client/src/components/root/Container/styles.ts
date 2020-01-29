import styled from 'styled-components/native';
import {
  layout,
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexDirection,
  color,
  backgroundColor,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  margin,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
} from 'styled-system';

import { ContainerStyleProps } from '~/components/root/types';

export const Box = styled.View<ContainerStyleProps>`
  ${layout};
  ${color};
  ${alignItems};
  ${alignContent};
  ${justifyContent};
  ${justifyItems};
  ${flexDirection}
  ${backgroundColor};
  ${marginTop};
  ${marginBottom};
  ${marginLeft};
  ${marginRight};
  ${margin};
  ${padding};
  ${paddingBottom};
  ${paddingLeft};
  ${paddingRight};
  ${paddingTop};
`;
