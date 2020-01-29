import styled from 'styled-components/native';
import {
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  flexDirection,
  color,
  backgroundColor,
  flex,
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
  borderRadius,
  border,
  layout,
} from 'styled-system';

import { FlexStyleProps } from '~/components/root/types';

export const Box = styled.View<FlexStyleProps>`
  ${layout};
  ${border};
  ${color};
  ${flex};
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
  ${borderRadius};
`;
