import React from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  H1,
  Left,
  Right,
  Icon,
  Text,
} from 'native-base';
import Swiper from 'react-native-swiper';
import { Image, StyleSheet, View } from 'react-native';
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
  flexRow: {
    flexDirection: 'row',
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
        <View style={styles.flexRow}>
          <Icon type="FontAwesome5" name="map-marker-alt" />
          <Text>{params.address}</Text>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.flexRow}>
            <Icon type="FontAwesome5" name="clock" />
            <Text>{params.duration} мин</Text>
          </View>
          <View style={styles.flexRow}>
            <Icon type="FontAwesome5" name="shoe-prints" />
            <Text>{params.length} км</Text>
          </View>
          <View style={styles.flexRow}>
            <Icon type="FontAwesome5" name="graduation-cap" />
            <Text>{params.exp}</Text>
          </View>
        </View>
        <View style={styles.flexRow}>
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
          <Button bordered>
            <Text>Показать на карте</Text>
          </Button>
        </View>
        <H1>Описание</H1>
        <Text>{params.description}</Text>
      </Content>
    </Container>
  );
};
