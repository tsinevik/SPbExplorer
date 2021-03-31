import React, { useContext, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import { AuthContext } from 'navigation/AuthProvider';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SIGN_UP'
>;

type SignUpT = {
  navigation: ProfileScreenNavigationProp;
};

const SignUpScreen = ({ navigation }: SignUpT) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { register } = useContext(AuthContext);

  return (
    <View>
      <TextInput placeholder="E-mail" onChangeText={setEmail} />
      <TextInput placeholder="Password" onChangeText={setPassword} />
      <Button
        title="Create account"
        onPress={() => register(email, password)}
      />
    </View>
  );
};

export default SignUpScreen;
