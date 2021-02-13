import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GroupsScreen} from './GroupsScreen';
import {LandmarksScreen} from './LandmarksScreen';
import {LandmarkDetailsScreen} from './LandmarkDetailsScreen';

const LandmarkStack = createStackNavigator();

export const LandmarkStackScreen = () => (
  <LandmarkStack.Navigator>
    <LandmarkStack.Screen name="Groups" component={GroupsScreen} />
    <LandmarkStack.Screen name="Landmarks" component={LandmarksScreen} />
    <LandmarkStack.Screen name="Details" component={LandmarkDetailsScreen} />
  </LandmarkStack.Navigator>
);
