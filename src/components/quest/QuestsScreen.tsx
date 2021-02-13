import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  Button,
  Card,
  CardItem,
  Icon,
  Left,
  Body,
  Right,
  Container,
  Content,
} from 'native-base';
import QuestCard from './QuestCard';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';

// type ProfileScreenNavigationProp = BottomTabNavigationProp<
//   RootStackParamList,
//   'Profile'
// >;
//
// type Props = {
//   navigation: ProfileScreenNavigationProp;
// };

export const QuestsScreen = ({navigation}) => {
  const [quests, setQuests] = useState([]);
  useEffect(() => {
    const subscriber = firestore()
      .collection('quests')
      .onSnapshot((documentSnapshot) => {
        setQuests(documentSnapshot.docs.map(doc => doc.data()));
      });
    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  return (
    <Container>
      <Content>
        {quests.map(quest => <QuestCard {...quest} />)}
      </Content>
    </Container>
  );
};
