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
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

export const LandmarkDetailsScreen = ({route}) => {
  const props = route.params;
  return (
    <Container>
      <Content>
        <Swiper style={styles.wrapper}>
          <View>
            <Image
              source={{
                uri: props.image,
              }}
              style={styles.image}
            />
          </View>
          <View>
            <Image
              source={{
                uri: props.image,
              }}
              style={styles.image}
            />
          </View>
        </Swiper>
        <H1>{props.title}</H1>
        <H2>Описание</H2>
        <Text>{props.description}</Text>
      </Content>
    </Container>
  );
};
