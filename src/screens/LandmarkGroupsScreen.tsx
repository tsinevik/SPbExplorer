import * as React from 'react';
import { Container, Content } from 'native-base';
import { LandmarkGroupCard } from 'components/LandmarkGroupCard';
import { useEffect, useState } from 'react';
import { getLandmarkGroupList } from 'api/storage-service';

export const LandmarkGroupsScreen = ({ navigation }) => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    getLandmarkGroupList().then((groupList) => setGroups(groupList));
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
