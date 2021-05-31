import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthStack } from './stacks/AuthStack';
import { AppStack } from './stacks/AppStack';
import { AuthContext } from './AuthProvider';
import Loading from './Loading';
import { createStackNavigator } from '@react-navigation/stack';
import { PlayQuestStackScreen } from 'navigation/stacks/PlayQuestStackScreen';
import { SPbTheme } from 'styles/theme';
import { StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import commonColor from '../../native-base-theme/variables/commonColor';

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{ animationEnabled: false }}
      mode="modal">
      {isLoading ? (
        <RootStack.Screen name="Loading" component={Loading} />
      ) : user ? (
        <RootStack.Screen name="AppStackScreen" component={AppStack} />
      ) : (
        <RootStack.Screen name="AuthStackScreen" component={AuthStack} />
      )}
      <RootStack.Screen
        name="Modal"
        component={PlayQuestStackScreen}
        options={{ animationEnabled: true, gestureEnabled: false }}
      />
    </RootStack.Navigator>
  );
};

export const Routes = () => {
  return (
    <StyleProvider style={getTheme(commonColor)}>
      <NavigationContainer theme={SPbTheme}>
        <RootStackScreen />
      </NavigationContainer>
    </StyleProvider>
  );
};
