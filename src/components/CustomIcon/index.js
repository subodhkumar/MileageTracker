import { MaterialIcons } from "@expo/vector-icons";
import { COLOR_WHITE } from "../../constants";
export function CustomIcon({ icon, color, size, style }) {
  let iconSize = 12;
  switch (size) {
    case "sm":
      iconSize = 12;
      break;
    case "md":
      iconSize = 15;
      break;
    case "lg":
      iconSize = 18;
      break;
    case "xl":
      iconSize = 21;
      break;
    case "xxl":
      iconSize = 24;
      break;
    default:
      break;
  }
  return (
    <MaterialIcons
      name={icon}
      size={iconSize}
      color={color || COLOR_WHITE}
      style={style}
    />
  );
}
