import * as React from 'react';
import { Container, Content } from 'native-base';
import QuestCard from 'components/QuestCard';
import { useContext } from 'react';
import { StorageContext } from 'navigation/StorageProvider';

// type ProfileScreenNavigationProp = BottomTabNavigationProp<
//   RootStackParamList,
//   'Profile'
// >;
//
// type Props = {
//   navigation: ProfileScreenNavigationProp;
// };

export const QuestListScreen = ({ navigation }) => {
  const {
    state: { quests },
  } = useContext(StorageContext);

  return (
    <Container>
      <Content>
        {Object.keys(quests).map((id) => (
          <QuestCard key={id} {...quests[id]} />
        ))}
      </Content>
    </Container>
  );
};
