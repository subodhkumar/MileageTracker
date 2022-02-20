import { Pressable, View } from "react-native";
import { useDispatch } from "react-redux";
import {
    COLOR_DANGER,
  COLOR_WHITE,
  ICON_DELETE,
  ICON_PLUS,
  SIZE_LARGE,
} from "../../constants";
import { clearRefuel } from "../../store/refuel/refuelSlice";
import { styles } from "../../styles";
import { CustomIcon } from "../CustomIcon";
import { CustomText } from "../CustomText";

export function ClearDataButton({}) {
  const {
    clearDataButton,
    bgDark,
    fRow,
    alignItemsCenter,
    justifyContentCenter,
    ph20
  } = styles;
  const dispatch = useDispatch();
  return (
    <Pressable
      style={[clearDataButton, bgDark]}
      onPress={() => dispatch(clearRefuel())}
    >
      <CustomIcon icon={ICON_DELETE} color={COLOR_DANGER} size={SIZE_LARGE} />
    </Pressable>
  );
}
