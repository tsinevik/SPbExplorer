import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Body, Button, Card, CardItem, Icon, Left, Right} from 'native-base';

export const LandmarkCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', props)}>
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
          <Text>{props.description}</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};
