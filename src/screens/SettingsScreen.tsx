import * as React from 'react';
import { useContext } from 'react';
import { AuthContext } from 'navigation/AuthProvider';
import {
  Button,
  Container,
  Content,
  H1,
  H3,
  Input,
  Label,
  Text
} from 'native-base';

export const SettingsScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <Container>
      <Content>
        {/*<Image source={{ uri: '' }} />*/}
        <H1>Изменить аватар</H1>
        <Label>Имя пользователя</Label>
        <Input />
        <Label>Электронная почта</Label>
        <Input />
        <Label>Пароль</Label>
        <Input />
        <Button onPress={logout} primary>
          <Text>Выйти</Text>
        </Button>
      </Content>
    </Container>
  );
};
