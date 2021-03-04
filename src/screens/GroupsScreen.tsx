import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {Container, Content} from 'native-base';
import {LandmarkGroupCard} from 'components/LandmarkGroupCard';

const groupsProps = {
  title: 'Мосты',
  exp: 500,
  total: 218,
  image:
    'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
};

const groups = [
  <LandmarkGroupCard {...groupsProps} />,
  <LandmarkGroupCard {...groupsProps} />,
  <LandmarkGroupCard {...groupsProps} />,
  <LandmarkGroupCard {...groupsProps} />,
];

export const GroupsScreen = ({navigation}) => {
  return (
    <Container>
      <Content>{groups}</Content>
    </Container>
  );
};
