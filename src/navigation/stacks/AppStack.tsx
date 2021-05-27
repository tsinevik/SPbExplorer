import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapStackScreen } from 'navigation/stacks/MapStackScreen';
import { QuestStackScreen } from 'navigation/stacks/QuestStackScreen';
import { LandmarkStackScreen } from 'navigation/stacks/LandmarkStackScreen';
import { ProfileStackScreen } from 'navigation/stacks/ProfileStackScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { typography } from 'styles/typography';
import { colors } from 'styles/colors';

const Tab = createBottomTabNavigator();

export const AppStack = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.brown,
      inactiveTintColor: 'gray',
      labelStyle: typography.regularText,
    }}>
    <Tab.Screen
      name="Map"
      component={MapStackScreen}
      options={{
        tabBarLabel: 'Карта',
        tabBarIcon: ({ color, size }) => (
          <Icon name="map-marked-alt" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Quests"
      component={QuestStackScreen}
      options={{
        tabBarLabel: 'Квесты',
        tabBarIcon: ({ color, size }) => (
          <Icon name="question" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Landmarks"
      component={LandmarkStackScreen}
      options={{
        tabBarLabel: 'Коллекция',
        tabBarIcon: ({ color, size }) => (
          <Icon name="landmark" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Профиль',
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} solid />
        ),
      }}
    />
  </Tab.Navigator>
);
