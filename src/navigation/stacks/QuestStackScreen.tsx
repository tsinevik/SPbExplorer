import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { QuestListScreen } from 'screens/QuestListScreen';
import { QuestDetailsScreen } from 'screens/QuestDetailsScreen';

const QuestStack = createStackNavigator();

export const QuestStackScreen = () => (
  <QuestStack.Navigator>
    <QuestStack.Screen name="Quests" component={QuestListScreen} />
    <QuestStack.Screen name="Details" component={QuestDetailsScreen} />
  </QuestStack.Navigator>
);
