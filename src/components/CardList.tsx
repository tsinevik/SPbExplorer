import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const CardList = ({children, route, cardInfo}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(route, cardInfo)}>
      <Card>
        <CardItem cardBody>
          <Image
            source={{
              uri: cardInfo.image,
            }}
            style={{ height: 200, width: undefined, flex: 1 }}
          />
        </CardItem>
        {children}
      </Card>
    </TouchableOpacity>
  );
};

export default CardList;
