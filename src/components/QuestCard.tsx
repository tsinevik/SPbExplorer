import React from 'react';
import {
  Body,
  Button,
  CardItem,
  H1,
  Icon,
  Left,
  Right,
  Text,
} from 'native-base';
import BigCard from 'components/BigCard';

const QuestCard = (props) => {
  return (
    <BigCard route="Details" cardInfo={props}>
      <CardItem>
        <H1>{props.title}</H1>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon type="FontAwesome5" name="map-marker-alt" />
            <Text>{props.address}</Text>
          </Button>
        </Left>
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon type="FontAwesome5" name="clock" />
            <Text>{props.duration} мин</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon
              type="FontAwesome5"
              name="shoe-prints"
              style={{ transform: [{ rotate: '-90deg' }] }}
            />
            <Text>{props.length} км</Text>
          </Button>
        </Body>
        <Right>
          <Button transparent>
            <Icon type="FontAwesome5" name="graduation-cap" />
            <Text>{props.exp}</Text>
          </Button>
        </Right>
      </CardItem>
    </BigCard>
  );
};

export default QuestCard;
