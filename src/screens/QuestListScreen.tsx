import * as React from 'react';
import { Container, Content } from 'native-base';
import QuestCard from 'components/QuestCard';
import { useEffect, useState } from 'react';
import { getQuests } from 'api/storage-service';
import { useTheme } from '@react-navigation/native';
import { Quest } from 'models/types';

// type ProfileScreenNavigationProp = BottomTabNavigationProp<
//   RootStackParamList,
//   'Profile'
// >;
//
// type Props = {
//   navigation: ProfileScreenNavigationProp;
// };

export const QuestListScreen = ({ navigation }) => {
  const [quests, setQuests] = useState<Quest[]>([]);
  useEffect(() => {
    getQuests().then((queryQuests) => {
      setQuests(queryQuests as Quest[]);
    });
  }, []);

  return (
    <Container>
      <Content>
        {quests.map((quest) => (
          <QuestCard key={quest.id} {...quest} />
        ))}
      </Content>
    </Container>
  );
};
