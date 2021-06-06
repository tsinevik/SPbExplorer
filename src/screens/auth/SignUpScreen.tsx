import React, { useContext, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/RootStackParamList';
import { AuthContext } from 'navigation/AuthProvider';
import {
  Button,
  Container,
  Content,
  Input,
  Item,
  Label,
  Text,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { globalStyles } from 'styles/globalStyles';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SIGN_UP'
>;

type SignUpT = {
  navigation: ProfileScreenNavigationProp;
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginTop: 20,
  },
  insets: {
    paddingHorizontal: 20,
  },
});

const SignUpScreen = ({ navigation }: SignUpT) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const { register } = useContext(AuthContext);

  return (
    <Container>
      <Content centerContent contentContainerStyle={styles.insets}>
        <Item stackedLabel>
          <Label>Ваше имя</Label>
          <Input
            placeholder="Иван Иванов"
            style={globalStyles.input}
            onChangeText={setUsername}
          />
        </Item>
        <Item stackedLabel>
          <Label>Электронная почта</Label>
          <Input
            keyboardType={'email-address'}
            placeholder="E-mail"
            style={globalStyles.input}
            onChangeText={setEmail}
          />
        </Item>
        <Item stackedLabel>
          <Label>Пароль</Label>
          <Input
            secureTextEntry
            placeholder="Password"
            style={globalStyles.input}
            onChangeText={setPassword}
          />
        </Item>
        <Button
          large
          block
          style={styles.button}
          onPress={() => register(email, password, username)}>
          <Text>Создать аккаунт</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default SignUpScreen;
