import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { QuestListScreen } from 'screens/QuestListScreen';
import { QuestDetailsScreen } from 'screens/QuestDetailsScreen';
import { globalStyles } from 'styles/globalStyles';

const QuestStack = createStackNavigator();

export const QuestStackScreen = () => (
  <QuestStack.Navigator
    screenOptions={{
      headerTitleStyle: globalStyles.headerTitle,
    }}>
    <QuestStack.Screen
      name="Quests"
      component={QuestListScreen}
      options={{ title: 'Квесты' }}
    />
    <QuestStack.Screen
      name="Details"
      component={QuestDetailsScreen}
      options={{ headerShown: false }}
    />
  </QuestStack.Navigator>
);
