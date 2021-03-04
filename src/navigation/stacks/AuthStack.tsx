import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from 'screens/SignUpScreen';
import SignInScreen from 'screens/SignInScreen';
import {ConfirmSignUpScreen} from 'screens/ConfirmSignUpScreen';
import ForgotPasswordScreen from 'screens/ForgotPasswordScreen';
import ForgotPasswordSubmitScreen from 'screens/ForgotPasswordSubmitScreen';

export const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="SIGN_IN">
      <Stack.Screen name="SIGN_IN" component={SignInScreen} />
      <Stack.Screen name="SIGN_UP" component={SignUpScreen} />
      <Stack.Screen name="FORGOT" component={ForgotPasswordScreen} />
      <Stack.Screen
        name="FORGOT_PASSWORD_SUBMIT"
        component={ForgotPasswordSubmitScreen}
      />
      <Stack.Screen name="CONFIRM_SIGN_UP" component={ConfirmSignUpScreen} />
    </Stack.Navigator>
  );
};
