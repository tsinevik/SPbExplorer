import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../auth/SignUp';
import SignIn from '../auth/SignIn';
import {ConfirmSignUp} from '../auth/ConfirmSignUp';
import ForgotPassword from '../auth/ForgotPassword';
import ForgotPasswordSubmit from '../auth/ForgotPasswordSubmit';

export const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="SIGN_IN">
      <Stack.Screen name="SIGN_IN" component={SignIn} />
      <Stack.Screen name="SIGN_UP" component={SignUp} />
      <Stack.Screen name="FORGOT" component={ForgotPassword} />
      <Stack.Screen
        name="FORGOT_PASSWORD_SUBMIT"
        component={ForgotPasswordSubmit}
      />
      <Stack.Screen name="CONFIRM_SIGN_UP" component={ConfirmSignUp} />
    </Stack.Navigator>
  );
};
