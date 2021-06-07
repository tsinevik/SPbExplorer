import React from 'react';
import { CardItem, H1, Icon, View } from 'native-base';
import BigCard from 'components/BigCard';
import TextIcon from 'components/TextIcon';
import { Quest } from 'models/types';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: 20,
  },
  icon: {
    fontSize: 48,
    color: '#558b6c',
  },
  title: {
    flexShrink: 1,
  },
});

const QuestCard = (props: Quest) => {
  return (
    <BigCard route="Details" cardInfo={props}>
      <CardItem>
        <H1>{props.title}</H1>
      </CardItem>
      <View style={styles.wrapper}>
        <View>
          <CardItem>
            <TextIcon iconName="map-marker-alt" text={props.address} small />
          </CardItem>
          <CardItem>
            <TextIcon iconName="clock" text={`${props.duration} мин`} small />
            <TextIcon
              iconName="shoe-prints"
              text={`${props.length} км`}
              rotate
              small
            />
            <TextIcon iconName="graduation-cap" text={props.experience} small />
          </CardItem>
        </View>
        {props.isCompleted && (
          <View style={styles.iconWrapper}>
            <Icon type="FontAwesome5" name="check" style={styles.icon} />
          </View>
        )}
      </View>
    </BigCard>
  );
};

export default QuestCard;
