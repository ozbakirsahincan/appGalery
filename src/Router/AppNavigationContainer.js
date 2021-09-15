import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeIndex from '../screens/Home/index'
import ProfileIndex from '../screens/Profile/index'

const Stack = createBottomTabNavigator()

export default function AppNavigationContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"HomeIndex"}>
                <Stack.Screen name={"HomeIndex"} component={HomeIndex} />
                <Stack.Screen name={"ProfileIndex"} component={ProfileIndex} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}