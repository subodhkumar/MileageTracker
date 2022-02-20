import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AddEntryButton } from "../../../components/AddEntryButton";
import { TimelineSectionList } from "../../../components/Timeline/TimelineSectionList";
import { styles } from "../../../styles";
import { getTimelineSectionData } from "../../../store/refuel/selectors";
import { ClearDataButton } from "../../../components/ClearDataButton";
import { CustomText } from "../../../components/CustomText";
import { COLOR_MUTE, SIZE_MEDIUM } from "../../../constants";
const NoData = () => {
  const { h100, alignItemsCenter, justifyContentCenter } = styles;
  return (
    <View style={[h100, alignItemsCenter, justifyContentCenter]}>
      <CustomText text="No Entries" color={COLOR_MUTE} size={SIZE_MEDIUM} />
    </View>
  );
};
export function TimeLineScreen({ navigation }) {
  const timelineSectionData = useSelector(getTimelineSectionData);
  const dispatch = useDispatch();
  const { h100, bgDark, ph10 } = styles;
  return (
    <View style={[h100, bgDark, ph10]}>
      {timelineSectionData.length ? (
        <TimelineSectionList data={timelineSectionData} />
      ) : (
        <NoData />
      )}
      <AddEntryButton navigation={navigation} />
      <ClearDataButton />
    </View>
  );
}
