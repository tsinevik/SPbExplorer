import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { styles } from 'styles/styles';

const BigCard = ({ children, route, cardInfo }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(route, cardInfo)}>
      <Card>
        <CardItem cardBody>
          <Image
            source={{
              uri: cardInfo.imageUrl,
            }}
            style={styles.cardImage}
          />
        </CardItem>
        {children}
      </Card>
    </TouchableOpacity>
  );
};

export default BigCard;
