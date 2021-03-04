import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Body, Button, Card, CardItem, Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export const LandmarkGroupCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Landmarks', props)}>
      <Card>
        <CardItem cardBody>
          <Image
            source={{
              uri: props.image,
            }}
            style={{height: 200, width: undefined, flex: 1}}
          />
        </CardItem>
        <CardItem>
          <Text>{props.title}</Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon name="thumbs-up" />
              <Text>{props.total}</Text>
            </Button>
          </Left>
          <Right>
            <Text>{props.exp}</Text>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};
