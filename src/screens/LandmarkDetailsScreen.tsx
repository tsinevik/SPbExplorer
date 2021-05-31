import React from 'react';
import { Button, Container, Content, H1, Icon } from 'native-base';
import Swiper from 'react-native-swiper';
import { Image, StyleSheet, Text, View } from 'react-native';
import TextIcon from 'components/TextIcon';
import { globalStyles } from 'styles/globalStyles';

const styles = StyleSheet.create({
  wrapper: {
    height: 500,
  },
});

export const LandmarkDetailsScreen = ({ route }) => {
  const landmark = route.params;
  return (
    <Container>
      <Content>
        <Swiper style={styles.wrapper}>
          <View>
            <Image
              source={{
                uri: landmark.imageUrl,
              }}
              style={globalStyles.detailsImage}
            />
          </View>
          <View>
            <Image
              source={{
                uri: landmark.imageUrl,
              }}
              style={globalStyles.detailsImage}
            />
          </View>
        </Swiper>
        <H1>{landmark.name}</H1>
        <TextIcon iconName={'map-marker-alt'} text={landmark.address} />
        <Button bordered>
          <Icon type="FontAwesome5" name="directions" />
        </Button>
        <H1>Историческая справка</H1>
        <Text>{landmark.description}</Text>
      </Content>
    </Container>
  );
};
