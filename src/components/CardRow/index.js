import { View } from "react-native";
export function CardRow({ children }) {
  if (children) {
    if (!Array.isArray(children)) {
      children = [children];
    }
  }
  if (children && children.length) {
    return (
      <View style={{ flexDirection: "row", minHeight: 30 }}>
        {children.map((c, index) => (
          <View key={index} style={{ flex: 1, justifyContent: "center" }}>
            {c}
          </View>
        ))}
      </View>
    );
  } else {
    return null;
  }
}
