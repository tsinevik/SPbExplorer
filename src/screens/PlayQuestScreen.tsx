import React, { useContext } from 'react';
import {
  Button,
  Container,
  Content,
  Text,
  Input,
  Item,
  Label,
} from 'native-base';
import { Image } from 'react-native';
import { StorageContext } from 'navigation/StorageProvider';

export const PlayQuestScreen = ({ navigation, route }) => {
  const { state } = useContext(StorageContext);
  const { questId } = route.params;
  let tasks = state.quests[questId].tasks;

  const isLastTask = (): boolean => tasks.length === 0;

  const _onPress = () => {
    tasks = tasks.slice(1);
    if (isLastTask()) {
      navigation.navigate('Results');
    }
  };

  return (
    <Container>
      <Content>
        <Image
          source={{
            uri: tasks[0].imageUrl,
          }}
          style={{ height: 500 }}
        />
        <Text>{tasks[0].description}</Text>
        <Item inlineLabel>
          <Label>Ответ</Label>
          <Input />
        </Item>
        <Button onPress={_onPress}>
          <Text>Ответить</Text>
        </Button>
      </Content>
    </Container>
  );
};
