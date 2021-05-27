import React from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  H1,
  H2,
  Left,
  Right,
} from 'native-base';
import Swiper from 'react-native-swiper';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  wrapper: {
    height: 500,
  },
  image: {
    height: 500,
    width: undefined,
    // flex: 1,
  },
});

export const QuestDetailsScreen = ({ route }) => {
  const params = route.params;
  const navigation = useNavigation();
  const questId = 0;
  return (
    <Container>
      <Content>
        <Swiper style={styles.wrapper}>
          <View>
            <Image
              source={{
                uri: params.imageUrl,
              }}
              style={styles.image}
            />
          </View>
          <View>
            <Image
              source={{
                uri: params.imageUrl,
              }}
              style={styles.image}
            />
          </View>
          <View>
            <Image
              source={{
                uri: params.imageUrl,
              }}
              style={styles.image}
            />
          </View>
        </Swiper>
        <H1>{params.title}</H1>
        <View>
          <Icon name="heart" />
          <Text>{params.address}</Text>
        </View>
        <View>
          <Left>
            <Icon name="heart" />
            <Text>40</Text>
          </Left>
          <Body>
            <Icon name="heart" />
            <Text>50</Text>
          </Body>
          <Right>
            <Icon name="heart" />
            <Text>60</Text>
          </Right>
        </View>
        <Button
          primary
          onPress={() =>
            navigation.navigate('Modal', {
              screen: 'Play',
              params: { questId },
            })
          }>
          <Text>Начать</Text>
        </Button>
        <Button primary>
          <Text>Показать на карте</Text>
        </Button>
        <H2>Описание</H2>
        <Text>{params.description}</Text>
      </Content>
    </Container>
  );
};
