import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from 'navigation/AuthProvider';

export const ProfileScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Sign Out" onPress={logout} />
    </View>
  );
};
