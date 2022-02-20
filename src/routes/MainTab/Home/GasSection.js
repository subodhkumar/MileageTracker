import { Card } from '../../../components/Card';
import { CardContent } from '../../../components/CardContent';
import { CardRow } from '../../../components/CardRow';
import { CardTitle } from '../../../components/CardTitle';
import { CustomText } from '../../../components/CustomText';
import {
  ICON_GAS,
  COLOR_PRIMARY,
  COLOR_DANGER,
  COLOR_SUCCESS,
  ICON_AVG_USAGE,
  ICON_LAST_FUEL_USAGE,
  ICON_LAST_FUEL_PRICE,
} from '../../../constants';
import { MuteText } from '../../../components/MuteText';
import { PrefixIcon } from '../../../components/PrefixIcon';
export function GasSection({
  data: { avgFuelConsumption, lastFuelConsumption, lastFuelPrice, lastEntryMessage },
}) {
  return (
    <Card>
      <CardTitle icon={ICON_GAS} title="Gas" />
      <CardContent>
        <CardRow>
          <PrefixIcon icon={ICON_AVG_USAGE} iconColor={COLOR_PRIMARY}>
            <CustomText text={avgFuelConsumption} suffix={'mi/l'} />
          </PrefixIcon>
          <MuteText text="Average fuel consumption" />
        </CardRow>

        <CardRow>
          <PrefixIcon icon={ICON_LAST_FUEL_USAGE} iconColor={COLOR_DANGER}>
            <CustomText text={lastFuelConsumption} suffix={'mi/l'} />
          </PrefixIcon>
          <MuteText text="Last fuel consumption" />
        </CardRow>

        <CardRow>
          <PrefixIcon icon={ICON_LAST_FUEL_PRICE} iconColor={COLOR_SUCCESS}>
            <CustomText text={lastFuelPrice} prefix={'$'} />
          </PrefixIcon>
          <MuteText text="Last fuel price" />
        </CardRow>

        <CardRow>
          <MuteText text={''} />
          <MuteText text={lastEntryMessage} />
        </CardRow>
      </CardContent>
    </Card>
  );
}
