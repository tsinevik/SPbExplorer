import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PlayQuestScreen } from 'screens/PlayQuestScreen';

const PlayQuestStack = createStackNavigator();

export const PlayQuestStackScreen = () => (
  <PlayQuestStack.Navigator headerMode={'none'}>
    <PlayQuestStack.Screen name="Play" component={PlayQuestScreen} />
  </PlayQuestStack.Navigator>
);
