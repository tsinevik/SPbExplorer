import * as React from 'react';
import { useContext, useState } from 'react';
import { AuthContext } from 'navigation/AuthProvider';
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
import UserAvatar from 'react-native-user-avatar';
import ImagePicker from 'react-native-image-crop-picker';
import { StyleSheet } from 'react-native';
import { globalStyles } from 'styles/globalStyles';
import { StorageContext } from 'navigation/StorageProvider';
import { ActionType } from 'models/types';

const styles = StyleSheet.create({
  save: {
    alignSelf: 'flex-end',
  },
  content: {
    alignItems: 'stretch',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  center: {
    alignSelf: 'center',
  },
  avatar: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  logout: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginTop: 70,
  },
});

export const SettingsScreen = ({ navigation, route }) => {
  const { logout } = useContext(AuthContext);
  const {
    state: { user },
    dispatch,
  } = useContext(StorageContext);
  const [image, setImage] = useState(user.imageUrl);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const choosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then((img) => {
        setTimeout(() => null);
        setImage(img.path);
      })
      .catch(() => console.log('user stopped choosing image'));
  };

  const onSave = () => {
    dispatch({ type: ActionType.EDIT_USER, payload: { username, email, image } });
    navigation.goBack();
  };

  return (
    <Container>
      <Content>
        <Button large transparent style={styles.save} onPress={onSave}>
          <Text>Сохранить</Text>
        </Button>
        <View style={styles.content}>
          <UserAvatar
            size={170}
            name={user.username}
            src={image}
            style={styles.center}
          />
          <Button transparent style={styles.avatar} onPress={choosePhoto}>
            <Text>Изменить аватар</Text>
          </Button>
          <Item stackedLabel>
            <Label>Имя пользователя</Label>
            <Input
              value={username}
              style={globalStyles.input}
              onChangeText={setUsername}
            />
          </Item>
          <Item stackedLabel>
            <Label>Электронная почта</Label>
            <Input
              keyboardType={'email-address'}
              value={email}
              style={globalStyles.input}
              onChangeText={setEmail}
            />
          </Item>
          <Item stackedLabel onPress={() => navigation.navigate('Password')}>
            <Label>Пароль</Label>
            <Input
              secureTextEntry
              defaultValue="random-password"
              disabled
              style={globalStyles.input}
            />
          </Item>
          <Button onPress={logout} large block style={styles.logout}>
            <Text>Выйти</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};
