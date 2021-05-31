import React from 'react';
import { CardItem, H2, Text} from 'native-base';
import BigCard from 'components/BigCard';
import { LandmarkGroup } from 'models/types';
import { StyleSheet } from 'react-native';
import { colors } from 'styles/colors';
import { typography } from 'styles/typography';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    borderBottomWidth: 1.2,
    borderStyle: 'solid',
    borderBottomColor: colors.gray,
  },
  percentage: {
    fontFamily: typography.bigNumbersFont,
    fontSize: 48,
    paddingTop: 5,
  },
  description: {
    alignSelf: 'flex-start',
    marginRight: 10,
    marginTop: -1,
  },
});

export const LandmarkGroupCard = (props: LandmarkGroup) => {
  const visited = 55;
  const completePercentage = Math.floor((visited * 100) / props.total);
  const cardInfo = { id: props.id, name: props.name, imageUrl: props.imageUrl };
  return (
    <BigCard route="Landmarks" cardInfo={cardInfo}>
      <CardItem style={styles.divider}>
        <H2>{props.name}</H2>
      </CardItem>
      <CardItem style={styles.wrapper}>
        <Text style={styles.percentage}>{completePercentage}%</Text>
        <Text style={styles.description}>
          Вы посетили {visited} из {props.total} достопримечательностей
        </Text>
      </CardItem>
    </BigCard>
  );
};
