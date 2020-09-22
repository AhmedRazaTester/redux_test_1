
import React from 'react';

import Screen1 from '../Screens/Screen1'
import Screen2 from '../Screens/Screen2'
import Screen3 from '../Screens/Screen3'
import Setting from '../Screens/Setting'


import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function Root_drawer() {
    return (

        <Drawer.Navigator initialRouteName="Login">

            <Drawer.Screen name="Screen1" component={Screen1} />
            <Drawer.Screen name="Screen2" component={Screen2} />
            <Drawer.Screen name="Screen3" component={Screen3} />
            <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>

    );
}