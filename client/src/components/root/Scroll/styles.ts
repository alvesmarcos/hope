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
} from 'styled-system';

import { ScrollStyleProps } from '~/components/root/types';

export const Box = styled.ScrollView<ScrollStyleProps>`
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
`;
