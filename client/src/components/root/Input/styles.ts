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

import { InputStyleProps } from '~/components/root/types';

export const TextInput = styled.TextInput<InputStyleProps>`
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
