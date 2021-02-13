import React, {useContext, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/RootStackParamList';
import {AuthContext} from '../navigation/AuthProvider';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SIGN_IN'
>;

type SignInT = {
  navigation: ProfileScreenNavigationProp;
};

const SignIn = ({navigation}: SignInT) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);

  return (
    <View>
      <TextInput placeholder="E-mail" onChangeText={setEmail} />
      <TextInput placeholder="Password" onChangeText={setPassword} />
      <Text onPress={() => navigation.navigate('FORGOT')}>
        Forgotten password?
      </Text>
      <Button title="Sign In" onPress={() => login(email, password)} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SIGN_UP')} />
    </View>
  );
};

export default SignIn;
