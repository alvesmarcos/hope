import styled from 'styled-components/native';
import { fontSize, color } from 'styled-system';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import { IconStyleProps } from '~/components/root/types';

export const SymbolFeather = styled(Feather)<IconStyleProps>`
  ${fontSize};
  ${color};
`;

export const SymbolFontAwesome = styled(FontAwesome)<IconStyleProps>`
  ${fontSize};
  ${color};
`;
