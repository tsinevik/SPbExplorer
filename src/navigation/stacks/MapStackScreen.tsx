import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MapScreen} from 'screens/MapScreen';

const MapStack = createStackNavigator();

export const MapStackScreen = () => (
  <MapStack.Navigator>
    <MapStack.Screen name="Map" component={MapScreen} />
  </MapStack.Navigator>
);
