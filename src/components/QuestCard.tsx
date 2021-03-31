import React from 'react';
import { Text } from 'react-native';
import { Body, Button, CardItem, Left, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardList from 'components/CardList';

const QuestCard = (props) => {
  return (
    <CardList route="Details" cardInfo={props}>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon name="thumbs-up" />
            <Text>{props.length}</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon name="gear" />
            <Text>{props.duration}</Text>
          </Button>
        </Body>
        <Right>
          <Text>{props.exp}</Text>
        </Right>
      </CardItem>
    </CardList>
  );
};

export default QuestCard;
