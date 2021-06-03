import React, { useEffect, useState } from 'react';
import { Container, Content } from 'native-base';
import { LandmarkCard } from 'components/LandmarkCard';
import { getLandmarks } from 'api/storage-service';
import { Landmark } from 'models/types';

export const LandmarkListScreen = ({ route }) => {
  const groupId = route.params.id;
  //todo multiple similar hooks
  const [landmarks, setLandmarks] = useState<Landmark[]>([]);
  useEffect(() => {
    getLandmarks(groupId).then((queryLandmarks) => {
      setLandmarks(queryLandmarks as Landmark[]);
    });
  }, []);

  return (
    <Container>
      <Content>
        {/*todo carry to common function*/}
        {landmarks.map((landmark) => (
          <LandmarkCard key={landmark.id} {...landmark} />
        ))}
      </Content>
    </Container>
  );
};
