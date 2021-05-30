import * as React from 'react';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  H1,
  Image,
  Left,
  Text,
  View,
} from 'native-base';

export const ProfileScreen = ({ navigation }) => {
  const user = {
    name: 'Roman Tsinevich',
    level: 5,
    completedQuests: 3,
    experience: 1300,
    visitedLandmarks: 6,
    cityKnowledge: 43,
  };

  return (
    <Container>
      <Content>
        {/*<Image source={{ uri: '' }} />*/}
        <H1>{user.name}</H1>
        <H1>Уровень</H1>
        <View>
          <H1>{user.level}</H1>
        </View>
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
          <CardItem style={{ borderWidth: 2 }}>
            <Left>{/*<Image source={{ uri: '' }} />*/}</Left>
            <Body>
              <Text>Vasily Kekich</Text>
            </Body>
          </CardItem>
          <CardItem style={{ borderWidth: 2 }}>
            <Left>{/*<Image source={{ uri: '' }} />*/}</Left>
            <Body>
              <Text>Vasily Kekich</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Button>
              <Text>Все</Text>
            </Button>
          </CardItem>
        </Card>
        <H1>Достижения</H1>
        <Card>
          <CardItem style={{ borderWidth: 2 }}>
            <Left>{/*<Image source={{ uri: '' }} />*/}</Left>
            <Body>
              <Text>Пройти 4 квеста</Text>
              <View style={{ borderWidth: 2, borderRadius: 10 }}>
                <Text>2/4</Text>
              </View>
            </Body>
          </CardItem>
          <CardItem style={{ borderWidth: 2 }}>
            <Left>{/*<Image source={{ uri: '' }} />*/}</Left>
            <Body>
              <Text>Пройти 4 квеста</Text>
              <View style={{ borderWidth: 2, borderRadius: 10 }}>
                <Text>2/4</Text>
              </View>
            </Body>
          </CardItem>
          <CardItem>
            <Button>
              <Text>Все</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
