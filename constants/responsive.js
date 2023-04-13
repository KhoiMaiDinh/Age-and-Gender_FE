const designWidth = 375;
import {Dimensions} from 'react-native';

function scale(number) {
  let scaleNumber;
  const currentDeviceWidth = Dimensions.get('window').width;
  scaleNumber = (number / designWidth) * currentDeviceWidth;
  return scaleNumber;
}

export default scale;
