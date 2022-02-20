import { TextInput, View, Text } from 'react-native';
import { COLOR_BG_DARK, COLOR_MUTE, COLOR_WHITE } from '../../constants';
export function CustomTextInput({ style, label, children, onChange, ...props }) {
  return (
    <View style={style}>
      {label && (
        <Text
          style={{
            color: COLOR_MUTE,
            position: 'absolute',
            top: -8,
            left: 8,
            fontSize: 10,
            backgroundColor: COLOR_BG_DARK,
            paddingHorizontal: 5,
          }}
        >
          {label}
        </Text>
      )}
      <TextInput {...props} onChange={onChange} color={COLOR_WHITE} />
      {children && <View style={{}}>{children}</View>}
    </View>
  );
}
