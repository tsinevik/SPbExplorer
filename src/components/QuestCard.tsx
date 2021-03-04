import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Body, Button, Card, CardItem, Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const QuestCard = (props) => {
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
          <Left>
            <Button transparent>
              <Icon name="thumbs-up" />
              <Text>{props.length}</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon name="gear" />
              <Text>{props.duration}</Text>
            </Button>
          </Body>
          <Right>
            <Text>{props.exp}</Text>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default QuestCard;
