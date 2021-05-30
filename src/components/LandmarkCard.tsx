import React from 'react';
import {
  Button,
  Card,
  CardItem,
  H1,
  Icon,
  Left,
  Right,
  Text,
  View,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const LandmarkCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', props)}>
      <Card>
        <CardItem>
          <Left>
            <H1>{props.name}</H1>
            <View>
              <Icon type="FontAwesome5" name="map-marker-alt" />
              <Text>{props.address}</Text>
            </View>
          </Left>
          <Right>
            <Button bordered>
              <Icon type="FontAwesome5" name="directions" />
            </Button>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};
