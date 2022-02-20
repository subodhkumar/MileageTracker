import { View, Text } from 'react-native';
import { styles } from '../../styles';
import { getFontSize } from '../../utils';
import { COLOR_MUTE, COLOR_TEXT, SIZE_XSMALL } from '../../constants';
export function CustomText({ text = 'Sample Text', icon, prefix, suffix, size, color }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
      {prefix && (
        <Text style={{ fontSize: getFontSize(size), color: color || COLOR_TEXT }}>
          {prefix.toString()}
        </Text>
      )}
      <Text style={{ fontSize: getFontSize(size), color: color || COLOR_TEXT }}>
        {text.toString()}
      </Text>
      {suffix && (
        <Text style={{ fontSize: getFontSize(SIZE_XSMALL), color: COLOR_MUTE }}>
          {`  ${suffix.toString()}`}
        </Text>
      )}
    </View>
  );
}
