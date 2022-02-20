import { Card } from "../../../components/Card";
import { CardContent } from "../../../components/CardContent";
import { CardRow } from "../../../components/CardRow";
import { CardTitle } from "../../../components/CardTitle";
import { CustomText } from "../../../components/CustomText";
import {
  ICON_GAS,
  ICON_DOLLAR_SIGN,
  ICON_MONEY_BILL,
  COLOR_PRIMARY,
} from "../../../constants";
import { MuteText } from "../../../components/MuteText";
import { PrefixIcon } from "../../../components/PrefixIcon";
export function CostsSection({ data: { currentMonth, previousMonth } }) {
  return (
    <Card>
      <CardTitle icon={ICON_DOLLAR_SIGN} title="Costs" />
      <CardContent>

        <CardRow>
          <MuteText text="THIS MONTH" />
        </CardRow>

        <CardRow>
          <PrefixIcon icon={ICON_GAS} iconColor={COLOR_PRIMARY}>
            <CustomText text={currentMonth.gas} prefix={"$"} />
          </PrefixIcon>
          <MuteText text="Gas" />
        </CardRow>

        <CardRow>
          <PrefixIcon icon={ICON_MONEY_BILL} iconColor={COLOR_PRIMARY}>
            <CustomText text={currentMonth.other} prefix={"$"} />
          </PrefixIcon>
          <MuteText text="Other costs" />
        </CardRow>

        <CardRow>
          <MuteText text="PREVIOUS MONTH" />
        </CardRow>

        <CardRow>
          <PrefixIcon icon={ICON_GAS} iconColor={COLOR_PRIMARY}>
            <CustomText text={previousMonth.gas} prefix={"$"} />
          </PrefixIcon>
          <MuteText text="Gas" />
        </CardRow>

        <CardRow>
          <PrefixIcon icon={ICON_MONEY_BILL} iconColor={COLOR_PRIMARY}>
            <CustomText text={previousMonth.other} prefix={"$"} />
          </PrefixIcon>
          <MuteText text="Other costs" />
        </CardRow>
        
      </CardContent>
    </Card>
  );
}
