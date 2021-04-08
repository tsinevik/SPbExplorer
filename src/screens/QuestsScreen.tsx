import * as React from 'react';
import { Container, Content } from 'native-base';
import QuestCard from 'components/QuestCard';
import { useEffect, useState } from 'react';
import { getQuestList } from 'api/storage-service';

// type ProfileScreenNavigationProp = BottomTabNavigationProp<
//   RootStackParamList,
//   'Profile'
// >;
//
// type Props = {
//   navigation: ProfileScreenNavigationProp;
// };

export const QuestsScreen = ({ navigation }) => {
  const [quests, setQuests] = useState([]);
  useEffect(() => {
    getQuestList().then((questList) => setQuests(questList));
  }, []);

  return (
    <Container>
      <Content>
        {quests.map((quest) => (
          <QuestCard {...quest} />
        ))}
      </Content>
    </Container>
  );
};
