import { scale, moderateScale } from 'react-native-size-matters';

function pxScaled(value: number): string {
  return `${scale(value)}px`;
}

function pxModerateScaled(value: number, factor = 1): string {
  return `${moderateScale(value, factor)}px`;
}

export { pxScaled, pxModerateScaled };
