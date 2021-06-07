import React, { useState } from 'react';
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
import { Alert, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
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
  description: {
    alignSelf: 'stretch',
  },
  incorrect: {
    borderColor: 'red',
  },
});

export const PlayQuestScreen = ({ navigation, route }) => {
  const { tasks, id } = route.params;
  const [order, setOrder] = useState(0);
  const [answer, setAnswer] = useState('');
  const [incorrect, setIncorrect] = useState(false);

  const isLastTask = (): boolean => tasks.length === order + 1;

  const onAnswer = () => {
    const parsedAnswer = answer.trim().toLowerCase();
    if (parsedAnswer === tasks[order].answer) {
      if (isLastTask()) {
        navigation.navigate('Results', { id });
      } else {
        setIncorrect(false);
        setOrder(order + 1);
        setAnswer('');
      }
    } else {
      setIncorrect(true);
    }
  };

  const onClose = () => {
    Alert.alert('Внимание!', 'Вы точно хотите прервать квест?', [
      {
        text: 'Отмена',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Да', onPress: () => navigation.navigate('Quests') },
    ]);
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
            progress={(order + 1) / tasks.length}
            height={20}
            width={null}
            style={styles.progress}
            borderRadius={15}>
            <Text style={globalStyles.progressBar}>
              {order + 1} / {tasks.length}
            </Text>
          </Progress.Bar>
        </Body>
        <Right style={styles.headerSide}>
          <Button large transparent onPress={onClose}>
            <Icon type="FontAwesome5" name="times" style={styles.headerIcon} />
          </Button>
        </Right>
      </Header>
      <Content>
        <Image
          source={{
            uri: tasks[order].imageUrl,
          }}
          style={globalStyles.detailsImage}
        />
        <KeyboardAvoidingView style={styles.content}>
          <Text style={styles.description}>{tasks[order].description}</Text>
          <H1 style={styles.label}>Ваш ответ</H1>
          <Item>
            <Input
              style={incorrect ? styles.incorrect : []}
              value={answer}
              onChangeText={setAnswer}
              onSubmitEditing={onAnswer}
            />
          </Item>
          <Button large block onPress={onAnswer} style={styles.button}>
            <Text>Ответить</Text>
          </Button>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
};
