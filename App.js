import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import RootStack from './Src/Navigation/RootStack'
import Store from "./Src/Redux/Store";

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}