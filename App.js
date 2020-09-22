import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Root_drawer from './Src/Navigation/Drawer'
import Store from "./Src/Redux/Store";

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Root_drawer />
      </NavigationContainer>
    </Provider>
  );
}