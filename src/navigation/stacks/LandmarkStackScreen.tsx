import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LandmarkGroupListScreen } from 'screens/LandmarkGroupListScreen';
import { LandmarkListScreen } from 'screens/LandmarkListScreen';
import { LandmarkDetailsScreen } from 'screens/LandmarkDetailsScreen';

const LandmarkStack = createStackNavigator();

export const LandmarkStackScreen = () => (
  <LandmarkStack.Navigator>
    <LandmarkStack.Screen name="Groups" component={LandmarkGroupListScreen} />
    <LandmarkStack.Screen name="Landmarks" component={LandmarkListScreen} />
    <LandmarkStack.Screen name="Details" component={LandmarkDetailsScreen} />
  </LandmarkStack.Navigator>
);
