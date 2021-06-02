import React, { useContext } from 'react';
import {
  Button,
  Container,
  Content,
  Text,
  Input,
  Item,
  H1,
  Header,
  Icon,
  Body,
  Right,
  Left,
} from 'native-base';
import { Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { StorageContext } from 'navigation/StorageProvider';
import { globalStyles } from 'styles/globalStyles';
import { colors } from 'styles/colors';

const styles = StyleSheet.create({
  headerBody: {
    flex: 3,
  },
  headerSide: {
    flex: 1,
  },
  headerIcon: {
    fontSize: 30,
    marginRight: 10,
    color: colors.fontPrimary,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  button: {
    alignSelf: 'stretch',
    marginHorizontal: 30,
    marginVertical: 30,
  },
  label: {
    marginTop: 30,
    marginBottom: 10,
  },
  progress: {
    alignSelf: 'stretch',
  },
});

export const PlayQuestScreen = ({ navigation, route }) => {
  const { state } = useContext(StorageContext);
  const { questId } = route.params;
  let tasks = state.quests[questId].tasks;

  const isLastTask = (): boolean => tasks.length === 0;

  const _onPress = () => {
    tasks = tasks.slice(1);
    if (isLastTask()) {
      navigation.navigate('Results');
    }
  };

  return (
    <Container>
      <Header>
        <Left style={styles.headerSide} />
        <Body style={styles.headerBody}>
          <Progress.Bar
            borderColor={colors.fontPrimary}
            borderWidth={1.3}
            color={colors.progress}
            progress={0.8}
            height={20}
            width={null}
            style={styles.progress}
            borderRadius={15}>
            <Text style={globalStyles.progressBar}>
              {tasks.length} / {tasks.length + 5}
            </Text>
          </Progress.Bar>
        </Body>
        <Right style={styles.headerSide}>
          <Button large transparent>
            <Icon type="FontAwesome5" name="times" style={styles.headerIcon} />
          </Button>
        </Right>
      </Header>
      <Content>
        <Image
          source={{
            uri: tasks[0].imageUrl,
          }}
          style={globalStyles.detailsImage}
        />
        <KeyboardAvoidingView style={styles.content}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          {/*<Text>{tasks[0].description}</Text>*/}
          <H1 style={styles.label}>Ваш ответ</H1>
          <Item>
            <Input />
          </Item>
          <Button large block onPress={_onPress} style={styles.button}>
            <Text>Ответить</Text>
          </Button>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
};
