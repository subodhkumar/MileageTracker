import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { AddEntryButton } from '../../../components/AddEntryButton';
import { GasSection } from './GasSection';
import { CostsSection } from './CostsSection';
import { LastEntriesSection } from './LastEntriesSection';
import { getCostsSummary, getGasSummary, getLastEntries } from '../../../store/refuel/selectors';
import { styles } from '../../../styles';
import { ClearDataButton } from '../../../components/ClearDataButton';

export function HomeScreen({ navigation }) {
  const gasSummary = useSelector(getGasSummary);
  const costsSummary = useSelector(getCostsSummary);
  const lastEntries = useSelector(getLastEntries);
  const { h100, bgDark, ph10 } = styles;
  return (
    <View style={[h100, bgDark]}>
      <ScrollView style={[ph10]}>
        <GasSection data={gasSummary} />
        <CostsSection data={costsSummary} />
        <LastEntriesSection data={lastEntries} />
      </ScrollView>
      <AddEntryButton navigation={navigation} />
      <ClearDataButton />
    </View>
  );
}
