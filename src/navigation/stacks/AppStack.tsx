import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MapStackScreen} from 'navigation/stacks/MapStackScreen';
import {QuestStackScreen} from 'navigation/stacks/QuestStackScreen';
import {ChallengeStackScreen} from 'navigation/stacks/ChallengeStackScreen';
import {LandmarkStackScreen} from 'navigation/stacks/LandmarkStackScreen';
import {ProfileStackScreen} from 'navigation/stacks/ProfileStackScreen';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});

export const AppStack = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Map') {
          iconName = 'map';
        } else if (route.name === 'Quests') {
          iconName = 'question';
        } else if (route.name === 'Challenges') {
          iconName = 'flag-o';
        } else if (route.name === 'Landmarks') {
          iconName = 'map-signs';
        } else if (route.name === 'Profile') {
          iconName = 'user-circle-o';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
    <Tab.Screen name="Map" component={MapStackScreen} />
    <Tab.Screen name="Quests" component={QuestStackScreen} />
    <Tab.Screen name="Challenges" component={ChallengeStackScreen} />
    <Tab.Screen name="Landmarks" component={LandmarkStackScreen} />
    <Tab.Screen name="Profile" component={ProfileStackScreen} />
  </Tab.Navigator>
);
