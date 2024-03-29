import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PlayQuestScreen } from 'screens/PlayQuestScreen';
import { ResultsScreen } from 'screens/ResultsScreen';

const PlayQuestStack = createStackNavigator();

export const PlayQuestStackScreen = () => (
  <PlayQuestStack.Navigator headerMode={'none'}>
    <PlayQuestStack.Screen name="Play" component={PlayQuestScreen} />
    <PlayQuestStack.Screen
      name="Results"
      component={ResultsScreen}
      options={{ gestureEnabled: false }}
    />
  </PlayQuestStack.Navigator>
);
