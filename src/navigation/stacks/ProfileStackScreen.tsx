import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from 'screens/ProfileScreen';

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);
