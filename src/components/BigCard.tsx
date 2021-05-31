import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from 'styles/globalStyles';

const BigCard = ({ children, route, cardInfo }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => navigation.navigate(route, cardInfo)}>
      <Card>
        <CardItem cardBody>
          <Image
            source={{
              uri: cardInfo.imageUrl,
            }}
            style={globalStyles.cardImage}
          />
        </CardItem>
        {children}
      </Card>
    </TouchableOpacity>
  );
};

export default BigCard;
