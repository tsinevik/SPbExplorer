import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LandmarkGroupListScreen } from 'screens/LandmarkGroupListScreen';
import { LandmarkListScreen } from 'screens/LandmarkListScreen';
import { LandmarkDetailsScreen } from 'screens/LandmarkDetailsScreen';
import { globalStyles } from 'styles/globalStyles';
import { colors } from 'styles/colors';

const LandmarkStack = createStackNavigator();

export const LandmarkStackScreen = () => (
  <LandmarkStack.Navigator
    screenOptions={{
      headerTitleStyle: globalStyles.headerTitle,
      headerBackTitleStyle: globalStyles.headerBackButton,
      headerTintColor: colors.bgSecondary,
    }}>
    <LandmarkStack.Screen
      name="Groups"
      component={LandmarkGroupListScreen}
      options={{ title: 'Коллекция' }}
    />
    <LandmarkStack.Screen
      name="Landmarks"
      component={LandmarkListScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
    <LandmarkStack.Screen
      name="Details"
      component={LandmarkDetailsScreen}
      options={{ headerShown: false }}
    />
  </LandmarkStack.Navigator>
);
