import { View } from 'react-native';
import { styles } from '../../styles';
export function CardContent({ children }) {
  const { ph20, pv10, cardContent } = styles;
  return <View style={[ph20, pv10, cardContent]}>{children}</View>;
}
