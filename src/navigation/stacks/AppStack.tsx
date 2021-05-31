import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MapStackScreen } from 'navigation/stacks/MapStackScreen';
import { QuestStackScreen } from 'navigation/stacks/QuestStackScreen';
import { LandmarkStackScreen } from 'navigation/stacks/LandmarkStackScreen';
import { ProfileStackScreen } from 'navigation/stacks/ProfileStackScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from 'styles/colors';
import { StyleSheet } from 'react-native';
import { typography } from 'styles/typography';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  label: {
    fontFamily: typography.regularFont,
  },
  tab: {
    backgroundColor: colors.bgSecondary,
  },
});

export const AppStack = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.primary,
      inactiveTintColor: 'gray',
      labelStyle: styles.label,
      style: styles.tab,
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
