import React from 'react';
import { Text } from 'react-native';
import { CardItem } from 'native-base';
import CardList from 'components/CardList';

export const LandmarkCard = (props) => {
  return (
    <CardList route="Details" cardInfo={props}>
      <CardItem>
        <Text>{props.title}</Text>
      </CardItem>
      <CardItem>
        <Text>{props.description}</Text>
      </CardItem>
    </CardList>
  );
};
