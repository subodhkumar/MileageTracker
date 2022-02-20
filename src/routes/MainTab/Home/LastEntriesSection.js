import { Card } from '../../../components/Card';
import { CardContent } from '../../../components/CardContent';
import { CardRow } from '../../../components/CardRow';
import { CardTitle } from '../../../components/CardTitle';
import { CustomText } from '../../../components/CustomText';
import { ICON_GAS, ICON_TIMELINE, COLOR_PRIMARY } from '../../../constants';
import { MuteText } from '../../../components/MuteText';
import { PrefixIcon } from '../../../components/PrefixIcon';
import { View } from 'react-native';
export function LastEntriesSection({ data }) {
  return (
    <Card>
      <CardTitle icon={ICON_TIMELINE} title={'Last Entries'} />
      <CardContent>
        {data.length ? (
          data.map((d, index) => {
            return (
              <View key={index}>
                <CardRow>
                  <MuteText text={d.date} />
                </CardRow>
                <CardRow>
                  <PrefixIcon icon={ICON_GAS} iconColor={COLOR_PRIMARY}>
                    <CustomText text={d.amount} prefix={'$'} />
                  </PrefixIcon>
                  <MuteText text={d.message} />
                </CardRow>
              </View>
            );
          })
        ) : (
          <MuteText text={'No Entries'} />
        )}
      </CardContent>
    </Card>
  );
}
