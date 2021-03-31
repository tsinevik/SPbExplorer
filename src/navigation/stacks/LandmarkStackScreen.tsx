import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LandmarkGroupsScreen } from 'screens/LandmarkGroupsScreen';
import { LandmarksScreen } from 'screens/LandmarksScreen';
import { LandmarkDetailsScreen } from 'screens/LandmarkDetailsScreen';

const LandmarkStack = createStackNavigator();

export const LandmarkStackScreen = () => (
  <LandmarkStack.Navigator>
    <LandmarkStack.Screen name="Groups" component={LandmarkGroupsScreen} />
    <LandmarkStack.Screen name="Landmarks" component={LandmarksScreen} />
    <LandmarkStack.Screen name="Details" component={LandmarkDetailsScreen} />
  </LandmarkStack.Navigator>
);
