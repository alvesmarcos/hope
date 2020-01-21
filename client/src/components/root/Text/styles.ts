import styled from 'styled-components/native';
import {
  fontSize,
  color,
  fontFamily,
  textAlign,
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

import { TextStyleProps } from '~/components/root/types';

export const Label = styled.Text<TextStyleProps>`
  ${fontSize};
  ${color};
  ${fontFamily};
  ${textAlign};
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
