import React from 'react';
import { Text } from 'react-native';
import { Button, CardItem, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardList from 'components/CardList';

export const LandmarkGroupCard = (props) => {
  return (
    <CardList route="Groups" cardInfo={props}>
      <CardItem>
        <Text>{props.title}</Text>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon name="thumbs-up" />
            <Text>{props.total}</Text>
          </Button>
        </Left>
        <Right>
          <Text>{props.exp}</Text>
        </Right>
      </CardItem>
    </CardList>
  );
};
