import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Button, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../../models/RootStackParamList';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CONFIRM_SIGN_UP'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'CONFIRM_SIGN_UP'>;

type ConfirmSignUpT = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

const ConfirmSignUpScreen = ({ route, navigation }: ConfirmSignUpT) => {
  return (
    <View>
      <TextInput placeholder="Code here" onChangeText={setCode} />
      <Text onPress={_onResend}>Resend code</Text>
      <Button title="Confirm" onPress={() => _onPress({ code: confirmCode })} />
    </View>
  );
};

export { ConfirmSignUpScreen };
