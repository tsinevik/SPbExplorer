import React, { useContext } from 'react';
import { Container, Content } from 'native-base';
import { LandmarkCard } from 'components/LandmarkCard';
import { StorageContext } from 'navigation/StorageProvider';

export const LandmarkListScreen = ({ route }) => {
  const groupId = route.params.id;
  const {
    state: { landmarks },
  } = useContext(StorageContext);

  return (
    <Container>
      <Content>
        {Object.keys(landmarks)
          .filter((id) => landmarks[id].groupId === groupId)
          .map((id) => (
            <LandmarkCard key={id} {...landmarks[id]} />
          ))}
      </Content>
    </Container>
  );
};
