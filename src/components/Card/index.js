import { View } from "react-native";
import { styles } from "../../styles";

export function Card({ children }) {
  const { mv20 } = styles;
  return <View style={[mv20]}>{children}</View>;
}
