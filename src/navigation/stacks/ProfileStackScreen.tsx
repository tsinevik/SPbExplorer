import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from 'screens/ProfileScreen';
import { styles } from 'styles/styles';
import { SettingsScreen } from 'screens/SettingsScreen';
import { Button, Icon, Text } from 'native-base';

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerTitleStyle: styles.headerTitle,
    }}>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={({ navigation }) => ({
        headerRight: () => (
          <Icon
            type="FontAwesome5"
            name="cog"
            onPress={() => navigation.navigate('Settings')}
          />
        ),
      })}
    />
    <ProfileStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={({ navigation }) => ({
        headerRight: () => (
          <Button onPress={() => navigation.goBack()} transparent>
            <Text>Сохранить</Text>
          </Button>
        ),
      })}
    />
  </ProfileStack.Navigator>
);
