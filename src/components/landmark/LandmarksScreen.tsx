import React from 'react';
import {Container, Content} from "native-base";
import {LandmarkCard} from "./LandmarkCard";

const landmarkProps = {
  title: 'Дворцовый мост',
  description: 'ну мост крч, красивый, разводной. Шо ещё сказать?',
  image:
    'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
};

const landmarks = [
  <LandmarkCard {...landmarkProps} />,
  <LandmarkCard {...landmarkProps} />,
  <LandmarkCard {...landmarkProps} />,
];

export const LandmarksScreen = () => {
  return (
    <Container>
      <Content>{landmarks}</Content>
    </Container>
  );
};
