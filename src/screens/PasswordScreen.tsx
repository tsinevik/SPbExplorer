import * as React from 'react';
import { useState } from 'react';
import {
  Button,
  Container,
  Content,
  Input,
  Item,
  Label,
  Text,
  View,
} from 'native-base';
import { StyleSheet } from 'react-native';
import { globalStyles } from 'styles/globalStyles';
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
  content: {
    alignItems: 'stretch',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  save: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginTop: 70,
  },
});

export const PasswordScreen = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [repeat, setRepeat] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSave = () => {
    if (oldPassword === repeat) {
      auth().currentUser?.updatePassword(newPassword);
      navigation.goBack();
    }
  };

  return (
    <Container>
      <Content>
        <View style={styles.content}>
          <Item stackedLabel>
            <Label>Введите старый пароль</Label>
            <Input
              secureTextEntry
              value={oldPassword}
              style={globalStyles.input}
              onChangeText={setOldPassword}
            />
          </Item>
          <Item stackedLabel>
            <Label>Повторите пароль</Label>
            <Input
              secureTextEntry
              value={repeat}
              style={globalStyles.input}
              onChangeText={setRepeat}
            />
          </Item>
          <Item stackedLabel>
            <Label>Введите новый пароль</Label>
            <Input
              secureTextEntry
              value={newPassword}
              style={globalStyles.input}
              onChangeText={setNewPassword}
            />
          </Item>
          <Button onPress={onSave} large block style={styles.save}>
            <Text>Сохранить</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};
