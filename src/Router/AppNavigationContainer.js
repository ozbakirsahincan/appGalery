import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ImageListDetails from '../screens/lists';
import ProfileIndex from '../screens/profile';
import HomeIndex from '../screens/home';

const BottomTabNavigator = createBottomTabNavigator();
const StackNavigator = createStackNavigator();

const HomeNavigator = () => {
  return (
    <BottomTabNavigator.Navigator
      initialRouteName={'HomeIndex'}
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTabNavigator.Screen name={'HomeIndex'} component={HomeIndex} />
      <BottomTabNavigator.Screen
        name={'ProfileIndex'}
        component={ProfileIndex}
      />
    </BottomTabNavigator.Navigator>
  );
};

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <StackNavigator.Screen name={'HomePage'} component={HomeNavigator} />
        <StackNavigator.Screen
          name={'ImageListDetails'}
          component={ImageListDetails}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigationContainer;
