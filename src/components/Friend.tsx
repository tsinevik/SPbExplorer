import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { CardItem, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import UserAvatar from 'react-native-user-avatar';
import { colors } from 'styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 2,
    borderColor: colors.fontPrimary,
  },
  name: {
    fontSize: 22,
    marginLeft: 20,
  },
});

const BigCard = ({
  name,
  style,
  imageUrl,
}: {
  name: string;
  imageUrl?: string;
  style?: StyleProp<ViewStyle>;
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      /*onPress={() => navigation.navigate(route, cardInfo)}*/
      style={style}>
      <CardItem style={styles.wrapper}>
        <UserAvatar size={60} name={name} src={imageUrl} />
        <Text style={styles.name}>{name}</Text>
      </CardItem>
    </TouchableOpacity>
  );
};

export default BigCard;
