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
  const user = route.params.user;
  const [image, setImage] = useState(user.imageUrl);

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

  return (
    <Container>
      <Content>
        <Button
          large
          transparent
          style={styles.save}
          onPress={() => navigation.navigate('Settings')}>
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
            <Input defaultValue={user.username} style={globalStyles.input} />
          </Item>
          <Item stackedLabel>
            <Label>Электронная почта</Label>
            <Input defaultValue={user.email} style={globalStyles.input} />
          </Item>
          <Item stackedLabel>
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
