import React, { useEffect, useState } from 'react';
import { Container, Content } from 'native-base';
import { LandmarkCard } from 'components/LandmarkCard';
import { getLandmarkList } from 'api/db-service';

export const LandmarksScreen = () => {
  const [landmarks, setLandmarks] = useState([]); //todo multiple similar hooks
  useEffect(() => {
    getLandmarkList().then((landmarkList) => setLandmarks(landmarkList));
  }, []);

  return (
    <Container>
      <Content>
        {/*todo carry to common function*/}
        {landmarks.map((landmark) => (
          <LandmarkCard {...landmark} />
        ))}
      </Content>
    </Container>
  );
};
