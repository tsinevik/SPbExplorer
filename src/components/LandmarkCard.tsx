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
  wrapper: {
    justifyContent: 'space-between',
  },
  gap: {
    height: 45,
    justifyContent: 'space-between',
  },
});

export const LandmarkCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', props)}>
      <Card>
        <CardItem style={styles.wrapper}>
          <View style={styles.gap}>
            <H2>{props.name}</H2>
            <TextIcon iconName={'map-marker-alt'} text={props.address} />
          </View>
          <Button bordered large>
            <Icon type="FontAwesome5" name="directions" />
          </Button>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};
