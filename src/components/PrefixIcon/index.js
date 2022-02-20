import { View } from "react-native";
import { Children } from "react/cjs/react.production.min";
import { CustomIcon } from "../CustomIcon";
import { SIZE_MEDIUM } from "../../constants";
export function PrefixIcon({ icon, children, iconColor, iconSize }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <View style={{ minWidth: 30, justifyContent: "center" }}>
        <CustomIcon
          icon={icon}
          size={iconSize || SIZE_MEDIUM}
          color={iconColor}
        />
      </View>
      {Children && (
        <View style={{ flex: 1, justifyContent: "center" }}>{children}</View>
      )}
    </View>
  );
}
