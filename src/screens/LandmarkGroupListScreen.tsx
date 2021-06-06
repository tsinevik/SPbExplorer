import * as React from 'react';
import { Container, Content } from 'native-base';
import { LandmarkGroupCard } from 'components/LandmarkGroupCard';
import { useContext } from 'react';
import { StorageContext } from 'navigation/StorageProvider';

export const LandmarkGroupListScreen = ({ navigation }) => {
  const {
    state: { landmarkGroups },
  } = useContext(StorageContext);

  return (
    <Container>
      <Content>
        {Object.keys(landmarkGroups).map((id) => (
          <LandmarkGroupCard key={id} {...landmarkGroups[id]} />
        ))}
      </Content>
    </Container>
  );
};
