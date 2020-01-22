import styled from 'styled-components/native';
import {
  flexbox,
  border,
  buttonStyle,
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
import { TouchableStyleProps } from '~/components/root/types';

export const Button = styled.TouchableOpacity<TouchableStyleProps>`
  ${flexbox};
  ${border};
  ${buttonStyle};
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
