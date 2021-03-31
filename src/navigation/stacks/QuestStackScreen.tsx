import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { QuestsScreen } from 'screens/QuestsScreen';
import { QuestDetailsScreen } from 'screens/QuestDetailsScreen';

const QuestStack = createStackNavigator();

export const QuestStackScreen = () => (
  <QuestStack.Navigator>
    <QuestStack.Screen name="Quests" component={QuestsScreen} />
    <QuestStack.Screen name="Details" component={QuestDetailsScreen} />
  </QuestStack.Navigator>
);
