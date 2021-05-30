import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from 'screens/auth/SignUpScreen';
import SignInScreen from 'screens/auth/SignInScreen';
import { ConfirmSignUpScreen } from 'screens/auth/ConfirmSignUpScreen';
import ForgotPasswordScreen from 'screens/auth/ForgotPasswordScreen';
import ForgotPasswordSubmitScreen from 'screens/auth/ForgotPasswordSubmitScreen';

export const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="SIGN_IN" headerMode="none">
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
