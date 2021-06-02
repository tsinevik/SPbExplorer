import React from 'react';
import {
  Button,
  Card,
  CardItem,
  H2,
  Icon,
  Left,
  Right,
  Text,
  View,
} from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextIcon from 'components/TextIcon';

const styles = StyleSheet.create({
  swiper: {
    justifyContent: 'space-between',
  },
  gap: {
    marginBottom: 10,
  },
});

export const LandmarkCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('Details', props)}>
      <Card>
        <CardItem style={styles.swiper}>
          <View>
            <H2 style={styles.gap}>{props.name}</H2>
            <TextIcon iconName={'map-marker-alt'} text={props.address} small />
          </View>
          <Button bordered large>
            <Icon type="FontAwesome5" name="directions" />
          </Button>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};
