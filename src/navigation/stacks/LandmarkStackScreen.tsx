import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LandmarkGroupListScreen } from 'screens/LandmarkGroupListScreen';
import { LandmarkListScreen } from 'screens/LandmarkListScreen';
import { LandmarkDetailsScreen } from 'screens/LandmarkDetailsScreen';
import { styles } from 'styles/styles';

const LandmarkStack = createStackNavigator();

export const LandmarkStackScreen = () => (
  <LandmarkStack.Navigator
    screenOptions={{
      headerTitleStyle: styles.headerTitle,
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
