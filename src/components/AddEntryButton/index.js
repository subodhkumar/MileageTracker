import { Pressable } from "react-native";
import { styles } from "../../styles";
import { CustomIcon } from "../CustomIcon";
import {
  COLOR_WHITE,
  ICON_PLUS,
  SIZE_LARGE,
} from "../../constants";
export function AddEntryButton({ navigation }) {
  const { addEntryButton, bgPrimary } = styles;
  return (
    <Pressable
      style={[addEntryButton, bgPrimary]}
      onPress={() => navigation.navigate("AddEntry")}
    >
      <CustomIcon icon={ICON_PLUS} color={COLOR_WHITE} size={SIZE_LARGE} />
    </Pressable>
  );
}
