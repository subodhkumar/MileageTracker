import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CustomIcon } from "../../components/CustomIcon";
import {
  COLOR_BG,
  COLOR_MUTE,
  COLOR_PRIMARY,
  ICON_HOME,
  ICON_TIMELINE,
  SIZE_XXLARGE,
} from "../../constants";
import { loadRefuel } from "../../store/refuel/refuelSlice";
import { HomeScreen } from "./Home";
import { TimeLineScreen } from "./Timeline";
const Tab = createBottomTabNavigator();
export function MainTabScreen({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRefuel());
  });

  const headerOptions = {
    headerStyle: {
      backgroundColor: COLOR_BG,
    },
    headerTitleStyle: {
      color: COLOR_PRIMARY,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: COLOR_BG,
          paddingBottom: 5,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconColor;
          if (route.name === "Home") {
            iconName = ICON_HOME;
            iconColor = focused ? COLOR_PRIMARY : COLOR_MUTE;
          } else {
            iconName = ICON_TIMELINE;
            iconColor = focused ? COLOR_PRIMARY : COLOR_MUTE;
          }
          return (
            <CustomIcon icon={iconName} color={iconColor} size={SIZE_XXLARGE} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={headerOptions} />
      <Tab.Screen
        name="Timeline"
        component={TimeLineScreen}
        options={headerOptions}
      />
    </Tab.Navigator>
  );
}
