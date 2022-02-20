import { TimeLineRows } from "../TImelineRows";
import { View } from "react-native";
import { COLOR_PRIMARY } from "../../../constants";
import { styles } from "../../../styles";
export function TimelineItem({ item }) {
  const { pv10, timeLineLeft } = styles;
  return (
    <View
      style={[
        pv10,
        timeLineLeft,
        {
          borderLeftWidth: 2,
          borderLeftColor: COLOR_PRIMARY,
        },
      ]}
    >
      <TimeLineRows item={item} />
    </View>
  );
}
