import styled from 'styled-components/native';
import { fontSize, color } from 'styled-system';
import Feather from 'react-native-vector-icons/Feather';

import { IconStyleProps } from '~/components/root/types';

export const Symbol = styled(Feather)<IconStyleProps>`
  ${fontSize};
  ${color};
`;
