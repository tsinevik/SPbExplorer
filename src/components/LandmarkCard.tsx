import React from 'react';
import { Card, CardItem, H2, Icon, View } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextIcon from 'components/TextIcon';
import { Landmark } from 'models/types';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
  },
  gap: {
    marginBottom: 10,
  },
  icon: {
    fontSize: 48,
    color: '#558b6c',
  },
  title: {
    flexShrink: 1,
  },
});

export const LandmarkCard = (props: Landmark) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('Details', props)}>
      <Card>
        <CardItem style={styles.wrapper}>
          <View style={styles.title}>
            <H2 style={styles.gap}>{props.name}</H2>
            <TextIcon iconName={'map-marker-alt'} text={props.address} small />
          </View>
          {props.isVisited && (
            <View>
              <Icon type="FontAwesome5" name="check" style={styles.icon} />
            </View>
          )}
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};
