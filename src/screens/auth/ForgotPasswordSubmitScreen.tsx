import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'FORGOT_PASSWORD_SUBMIT'
>;

type ForgotPasswordSubmitT = {
  navigation: ProfileScreenNavigationProp;
};

const ForgotPasswordSubmitScreen = ({ navigation }: ForgotPasswordSubmitT) => {
  return (
    <View>
      <TextInput placeholder="Code" onChangeText={handleInput('code')} />
      <TextInput
        placeholder="Password"
        onChangeText={handleInput('password')}
      />
      <TextInput placeholder="Password confirm" />
      <Button
        title="Confirm"
        onPress={() => _onPress({ ...userInfo, email: 'yooo' })}
      />
    </View>
  );
};

export default ForgotPasswordSubmitScreen;
