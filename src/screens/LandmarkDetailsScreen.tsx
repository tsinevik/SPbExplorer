import React from 'react';
import { Container, Content, H1, H2 } from 'native-base';
import Swiper from 'react-native-swiper';
import { Image, StyleSheet, Text, View } from 'react-native';

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

export const LandmarkDetailsScreen = ({ route }) => {
  const params = route.params;
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
        </Swiper>
        <H1>{params.title}</H1>
        <H2>Описание</H2>
        <Text>{params.description}</Text>
      </Content>
    </Container>
  );
};
