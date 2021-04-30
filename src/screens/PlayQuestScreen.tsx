import React from 'react';
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

export const PlayQuestScreen = ({ navigation }) => {
  const task = { imageUrl: 'jdjd' };
  return (
    <Container>
      <Content>
        <Image
          source={{
            uri: task.imageUrl,
          }}
          style={{ height: 500 }}
        />
        <Text>{task.description}</Text>
        <Item inlineLabel>
          <Label>Ответ</Label>
          <Input />
        </Item>
        <Button onPress={() => navigation.push('Play')}>
          <Text>Ответить</Text>
        </Button>
      </Content>
    </Container>
  );
};
