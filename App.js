import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { COLOR_BG_DARK } from './src/constants';
import { AddEntryScreen } from './src/routes/AddEntry';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { MainTabScreen } from './src/routes/MainTab';

const AppStack = createNativeStackNavigator();

import store from './src/store';
let persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppStack.Navigator
            screenOptions={{
              cardStyle: {
                backgroundColor: COLOR_BG_DARK,
              },
            }}
          >
            <AppStack.Screen
              name="Main"
              component={MainTabScreen}
              options={{
                headerShown: false,
              }}
            />
            <AppStack.Screen
              name="AddEntry"
              component={AddEntryScreen}
              options={{
                headerShown: false,
              }}
            />
          </AppStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
