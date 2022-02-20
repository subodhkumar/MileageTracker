import { CustomText } from '../../CustomText';
import { MuteText } from '../../MuteText';
import { View } from 'react-native';
import { COLOR_MUTE, ICON_MILEAGE, SIZE_MEDIUM, SIZE_SMALL } from '../../../constants';
import { PrefixIcon } from '../../PrefixIcon';
import { styles } from '../../../styles';
export function TimelineCard({ item }) {
  const { fRow, pv10, alignItemsCenter, justifyContentCenter } = styles;
  return (
    <View style={[fRow, pv10]}>
      <View style={{ flex: 1 }}>
        <CustomText size={SIZE_MEDIUM} text={'Refueling'} />
        <MuteText text={item.date} />
        <PrefixIcon icon={ICON_MILEAGE} iconColor={COLOR_MUTE}>
          <MuteText text={item.odometer} suffix={'mi'} />
        </PrefixIcon>
      </View>
      <View style={[alignItemsCenter, justifyContentCenter, { flex: 1 }]}>
        <CustomText size={SIZE_SMALL} text={item.amount} prefix={'$'} />
      </View>
    </View>
  );
}
