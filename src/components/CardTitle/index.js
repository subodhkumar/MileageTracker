import { View } from "react-native";
import { CustomIcon } from "../CustomIcon";
import { CustomText } from "../CustomText";
import { COLOR_WHITE } from "../../constants";
import { styles } from "../../styles";
export function CardTitle({ icon, title }) {
  const { bgDefault, fRow, ph20, pv5, mv10,cPrimary, cWhite } = styles;
  return (
    <View
      style={[
        fRow,
        bgDefault,
        ph20,
        mv10,
        pv5,
        {
          width: "35%",
          alignSelf: "center",
          borderRadius: 25,
        },
      ]}
    >
      <View style={{ flex: 1, height: 30, justifyContent: "center" }}>
        <CustomIcon icon={icon} style={[cPrimary]} size={"md"} />
      </View>
      <View
        style={{
          flex: 4,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomText text={title} size="sm" color={COLOR_WHITE} style={[cWhite]} />
      </View>
    </View>
  );
}
