import * as React from 'react';
import { Container, Content } from 'native-base';
import QuestCard from 'components/QuestCard';
import { useEffect, useState } from 'react';
import { getQuestList } from 'api/storage-service';
import { useTheme } from '@react-navigation/native';

// type ProfileScreenNavigationProp = BottomTabNavigationProp<
//   RootStackParamList,
//   'Profile'
// >;
//
// type Props = {
//   navigation: ProfileScreenNavigationProp;
// };

export const QuestListScreen = ({ navigation }) => {
  const [quests, setQuests] = useState([]);
  useEffect(() => {
    getQuestList().then((questList) => setQuests(questList));
  }, []);

  return (
    <Container style={{ backgroundColor: useTheme().colors.background }}>
      <Content>
        {quests.map((quest) => (
          <QuestCard {...quest} />
        ))}
      </Content>
    </Container>
  );
};
