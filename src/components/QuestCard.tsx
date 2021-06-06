import React from 'react';
import { CardItem, H1 } from 'native-base';
import BigCard from 'components/BigCard';
import TextIcon from 'components/TextIcon';
import { Quest } from 'models/types';

const QuestCard = (props: Quest) => {
  return (
    <BigCard route="Details" cardInfo={props}>
      <CardItem>
        <H1>{props.title}</H1>
      </CardItem>
      <CardItem>
        <TextIcon iconName="map-marker-alt" text={props.address} small />
      </CardItem>
      <CardItem>
        <TextIcon iconName="clock" text={`${props.duration} мин`} small />
        <TextIcon
          iconName="shoe-prints"
          text={`${props.length} км`}
          rotate
          small
        />
        <TextIcon iconName="graduation-cap" text={props.experience} small />
      </CardItem>
    </BigCard>
  );
};

export default QuestCard;
