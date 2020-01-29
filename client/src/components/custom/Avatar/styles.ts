import styled from 'styled-components/native';
import { scale } from 'react-native-size-matters';


export interface ImageStyleProps {
  size: number;
}

export const Image = styled.Image<ImageStyleProps>`
  width: ${props => scale(props.size)};
  height: ${props => scale(props.size)};
  border-radius: ${props => scale(props.size)/2};
`;
