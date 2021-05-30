import React from 'react';
import { Button, Container, Content, H1, Icon } from 'native-base';
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
  flexRow: {
    flexDirection: 'row',
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
        <H1>{params.name}</H1>
        <View style={styles.flexRow}>
          <Icon type="FontAwesome5" name="map-marker-alt" />
          <Text>{params.address}</Text>
        </View>
        <Button bordered>
          <Icon type="FontAwesome5" name="directions" />
        </Button>
        <H1>Историческая справка</H1>
        <Text>{params.description}</Text>
      </Content>
    </Container>
  );
};
