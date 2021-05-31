import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Body, CardItem, Left, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from 'styles/globalStyles';
import UserAvatar from 'react-native-user-avatar';

const BigCard = ({ name, imageUrl }: { name: string; imageUrl?: string }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      /*onPress={() => navigation.navigate(route, cardInfo)}*/
    >
      <CardItem style={{ borderWidth: 2 }}>
        <Left>
          <UserAvatar size={60} name={name} src={imageUrl} />
        </Left>
        <Body>
          <Text>{name}</Text>
        </Body>
      </CardItem>
    </TouchableOpacity>
  );
};

export default BigCard;
