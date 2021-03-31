import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FORGOT'
>;

type ForgotPasswordT = {
  navigation: ProfileScreenNavigationProp;
};

const ForgotPasswordScreen = ({ navigation }: ForgotPasswordT) => {
  return (
    <View>
      <TextInput placeholder="E-mail" onChangeText={(text) => setEmail(text)} />
      <Button title="Confirm" onPress={() => _onPress({ email: _email })} />
    </View>
  );
};

export default ForgotPasswordScreen;
