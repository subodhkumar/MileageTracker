import { RenderCircle } from "../RenderCircle";
import { TimelineCard } from "../TimelineCard";
import { View } from "react-native";
import { styles } from "../../../styles";
export function TimeLineRows({ item }) {
  const { fRow, mv10 } = styles;
  return (
    <View style={[fRow, mv10]}>
      <View style={{ flex: 1 }}>
        <RenderCircle />
      </View>
      <View style={{ flex: 6 }}>
        <TimelineCard item={item} />
      </View>
    </View>
  );
}
