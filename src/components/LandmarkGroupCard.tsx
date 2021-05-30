import React from 'react';
import { CardItem, H2, Left, Right, Text } from 'native-base';
import BigCard from 'components/BigCard';
import { LandmarkGroup } from 'models/types';

export const LandmarkGroupCard = (props: LandmarkGroup) => {
  const visited = 49;
  const completePercentage = Math.floor((visited * 100) / props.total);
  const cardInfo = { id: props.id, name: props.name };
  return (
    <BigCard route="Landmarks" cardInfo={cardInfo}>
      <CardItem
        style={{
          borderBottomWidth: 1,
          borderStyle: 'solid',
          borderBottomColor: 'black',
        }}>
        <H2>{props.name}</H2>
      </CardItem>
      <CardItem>
        <Left>
          <Text>{completePercentage}%</Text>
        </Left>
        <Right>
          <Text>
            Вы посетили {visited} из {props.total} достопримечательностей
          </Text>
        </Right>
      </CardItem>
    </BigCard>
  );
};
