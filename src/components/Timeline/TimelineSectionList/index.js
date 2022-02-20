import { SectionList, StyleSheet, Text, View } from "react-native";
import { TimeLineHeader } from "../TimelineHeader";
import { TimelineItem } from "../TimelineItem";

export function TimelineSectionList({ data }) {
  return (
    <View
      style={{
        top: 20,
      }}
    >
      <SectionList
        sections={data}
        renderSectionHeader={({ section }) => (
          <TimeLineHeader text={section.title} />
        )}
        renderItem={({ item }) => <TimelineItem item={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}
