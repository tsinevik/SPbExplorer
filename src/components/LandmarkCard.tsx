import React from 'react';
import { Text } from 'react-native';
import { CardItem } from 'native-base';
import BigCard from 'components/BigCard';

export const LandmarkCard = (props) => {
  return (
    <BigCard route="Details" cardInfo={props}>
      <CardItem>
        <Text>{props.title}</Text>
      </CardItem>
      <CardItem>
        <Text>{props.description}</Text>
      </CardItem>
    </BigCard>
  );
};
