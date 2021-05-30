import * as React from 'react';
import { Container, Content } from 'native-base';
import { LandmarkGroupCard } from 'components/LandmarkGroupCard';
import { useEffect, useState } from 'react';
import { getLandmarkGroups } from 'api/storage-service';
import { LandmarkGroup } from 'models/types';

export const LandmarkGroupListScreen = ({ navigation }) => {
  const [groups, setGroups] = useState<LandmarkGroup[]>([]);
  useEffect(() => {
    getLandmarkGroups().then((queryGroups) => {
      const landmarkGroups: LandmarkGroup[] = queryGroups.map((group) => ({
        ...group.data(),
        id: group.id,
      }));
      setGroups(landmarkGroups);
    });
  }, []);

  return (
    <Container>
      <Content>
        {groups.map((group) => (
          <LandmarkGroupCard {...group} />
        ))}
      </Content>
    </Container>
  );
};
