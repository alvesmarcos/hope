import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 16,
  baseMargin: 16,
  baseRadius: 4,
  fontFactor: 0.3,
  screenWidth: width < height ? width : height,
  sceenHeight: width < height ? height : width,
};
