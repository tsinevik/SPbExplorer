import React, { useContext, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../models/RootStackParamList';
import { Button, Container, Content, Input, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { AuthContext } from 'navigation/AuthProvider';
import { globalStyles } from 'styles/globalStyles';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FORGOT'
>;

type ForgotPasswordT = {
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

const ForgotPasswordScreen = ({ navigation }: ForgotPasswordT) => {
  const [email, setEmail] = useState('');
  const { reset } = useContext(AuthContext);

  return (
    <Container>
      <Content centerContent contentContainerStyle={styles.insets}>
        <Input
          keyboardType={'email-address'}
          placeholder="E-mail"
          style={globalStyles.input}
          onChangeText={setEmail}
        />
        <Button large block style={styles.button} onPress={() => reset(email)}>
          <Text>Отправить</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default ForgotPasswordScreen;
