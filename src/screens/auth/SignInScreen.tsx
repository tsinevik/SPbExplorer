import React, { useContext, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'models/RootStackParamList';
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
import { globalStyles } from 'styles/globalStyles';
import { StyleSheet } from 'react-native';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SIGN_IN'
>;

type SignInT = {
  navigation: ProfileScreenNavigationProp;
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginTop: 20,
  },
  center: {
    alignSelf: 'center',
  },
  insets: {
    paddingHorizontal: 20,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginTop: -10,
    marginBottom: 20,
  },
});

const SignInScreen = ({ navigation }: SignInT) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(AuthContext);

  return (
    <Container>
      <Content centerContent contentContainerStyle={styles.insets}>
        <Item stackedLabel>
          <Label>Электронная почта</Label>
          <Input
            placeholder="example@email.ru"
            style={globalStyles.input}
            onChangeText={setEmail}
          />
        </Item>
        <Item stackedLabel>
          <Label>Пароль</Label>
          <Input
            placeholder="Введите пароль"
            secureTextEntry
            style={globalStyles.input}
            onChangeText={setPassword}
          />
        </Item>
        <Text style={styles.forgot} onPress={() => navigation.navigate('FORGOT')}>
          Забыли пароль?
        </Text>
        <Button
          large
          block
          style={styles.button}
          onPress={() => login(email, password)}>
          <Text>Войти</Text>
        </Button>
        <Button
          large
          block
          style={styles.button}
          onPress={() => navigation.navigate('SIGN_UP')}>
          <Text>Регистрация</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default SignInScreen;
