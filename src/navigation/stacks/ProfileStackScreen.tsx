import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from 'screens/ProfileScreen';
import { globalStyles } from 'styles/globalStyles';
import { SettingsScreen } from 'screens/SettingsScreen';
import { PasswordScreen } from 'screens/PasswordScreen';

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    headerMode="none"
    screenOptions={{
      headerTitleStyle: globalStyles.headerTitle,
    }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    <ProfileStack.Screen name="Settings" component={SettingsScreen} />
    <ProfileStack.Screen name="Achievements" component={SettingsScreen} />
    <ProfileStack.Screen name="Friends" component={SettingsScreen} />
    <ProfileStack.Screen name="Password" component={PasswordScreen} />
  </ProfileStack.Navigator>
);
