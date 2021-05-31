import * as React from 'react';
import * as Progress from 'react-native-progress';
import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  H1,
  Right,
  Text,
  View,
} from 'native-base';
import Achievement from 'components/Achievement';
import Friend from 'components/Friend';
import UserAvatar from 'react-native-user-avatar';
import { colors } from 'styles/colors';
import { StyleSheet } from 'react-native';
import { typography } from 'styles/typography';

const styles = StyleSheet.create({
  progress: { fontFamily: typography.bigNumbersFont },
});

export const ProfileScreen = ({ navigation }) => {
  const user = {
    name: 'Roman Tsinevich',
    imageUrl: '',
    level: 5,
    completedQuests: 3,
    experience: 1300,
    visitedLandmarks: 6,
    cityKnowledge: 43,
  };

  const friends = [
    { name: 'Vasily Kekich', imageUrl: '' },
    { name: 'Viktor Timokhov', imageUrl: '' },
  ];

  return (
    <Container>
      <Content>
        <UserAvatar size={60} name={user.name} src={user.imageUrl} />
        <H1>{user.name}</H1>
        <H1>Уровень</H1>
        <View>
          <H1>{user.level}</H1>
        </View>
        <Progress.Circle
          size={90}
          progress={0.5}
          thickness={3}
          showsText={true}
          formatText={() => user.level}
          color={colors.progress}
          unfilledColor={colors.gray}
          borderColor={'rgba(0,0,0,0)'}
          fill={colors.bgSecondary}
          textStyle={styles.progress}
        />
        <H1>Статистика</H1>
        <Card>
          <CardItem style={{ borderWidth: 2 }}>
            <Text>{user.completedQuests}</Text>
            <Text>Пройдено квестов</Text>
          </CardItem>
          <CardItem style={{ borderWidth: 2 }}>
            <Text>{user.experience}</Text>
            <Text>Всего опыта</Text>
          </CardItem>
          <CardItem style={{ borderWidth: 2 }}>
            <Text>{user.visitedLandmarks}</Text>
            <Text>Посещено мест</Text>
          </CardItem>
          <CardItem style={{ borderWidth: 2 }}>
            <Text>{user.cityKnowledge}</Text>
            <Text>% изученности города</Text>
          </CardItem>
        </Card>
        <H1>Друзья</H1>
        <Card>
          <Friend name={friends[0].name} imageUrl={friends[0].imageUrl} />
          <Friend name={friends[1].name} imageUrl={friends[1].imageUrl} />
          <CardItem>
            <Button bordered>
              <Text>Все</Text>
            </Button>
          </CardItem>
        </Card>
        <H1>Достижения</H1>
        <Card>
          <Achievement task={'Пройти 4 квеста'} total={4} progress={2} />
          <Achievement task={'Пройти 4 квеста'} total={4} progress={2} />
          <CardItem>
            <Right>
              <Button bordered>
                <Text>Все</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
