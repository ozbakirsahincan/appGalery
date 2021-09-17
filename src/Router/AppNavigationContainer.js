import * as React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileIndex from '../screens/Profile/index';
import HomeIndex from '../screens/Home/index';

const BottomTabNavigator = createBottomTabNavigator();
const StackNavigator = createStackNavigator();

const HomeNavigator = () => {
    return <BottomTabNavigator.Navigator initialRouteName={"HomeIndex"} screenOptions={{
        headerShown:false
    }}>
        <BottomTabNavigator.Screen name={"HomeIndex"} component={HomeIndex} />
        <BottomTabNavigator.Screen name={"ProfileIndex"} component={ProfileIndex} />
    </BottomTabNavigator.Navigator>;
};

function AppNavigationContainer() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator screenOptions={{ 
                headerShown:false
            }}>
                <StackNavigator.Screen name={'HomePage'} component={HomeNavigator} />
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigationContainer;