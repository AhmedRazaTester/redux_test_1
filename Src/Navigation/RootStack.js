import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login'
import Drawer from './Drawer'

const Stack = createStackNavigator();

export default function RootStack() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Drawer" component={Drawer} />
        </Stack.Navigator>

    );
}