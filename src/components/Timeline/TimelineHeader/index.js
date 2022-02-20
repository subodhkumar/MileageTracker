import { CustomText } from "../../CustomText";
import { View } from "react-native";
import { RenderCircleSmall } from "../RenderCircle";
import { COLOR_PRIMARY, COLOR_WHITE, SIZE_SMALL } from "../../../constants";
import { styles } from "../../../styles";
export function TimeLineHeader({ text }) {
  const { fRow, alignItemsCenter, timeLineLeft } = styles;
  return (
    <View style={[fRow, alignItemsCenter, timeLineLeft]}>
      <View style={{ flex: 1 }}>
        <RenderCircleSmall />
      </View>
      <View style={{ flex: 6 }}>
        <CustomText text={text} color={COLOR_PRIMARY} size={SIZE_SMALL} />
      </View>
    </View>
  );
}
