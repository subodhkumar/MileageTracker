import { View } from 'react-native';
import { CustomIcon } from '../../CustomIcon';
import { COLOR_PRIMARY, ICON_GAS, SIZE_XXLARGE } from '../../../constants';
export function RenderCircle() {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        backgroundColor: COLOR_PRIMARY,
        borderRadius: 25,
        left: -25,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CustomIcon icon={ICON_GAS} size={SIZE_XXLARGE} />
    </View>
  );
}
export function RenderCircleSmall() {
  return (
    <View
      style={{
        width: 20,
        height: 20,
        backgroundColor: COLOR_PRIMARY,
        borderRadius: 10,
        left: -9,
      }}
    ></View>
  );
}
