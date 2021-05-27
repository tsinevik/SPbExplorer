import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from 'screens/ProfileScreen';
import { styles } from 'styles/styles';

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerTitleStyle: styles.headerTitle,
    }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);
