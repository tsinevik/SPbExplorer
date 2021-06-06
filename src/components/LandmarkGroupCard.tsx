import React, { useContext } from 'react';
import { CardItem, H2, Text } from 'native-base';
import BigCard from 'components/BigCard';
import { LandmarkGroup } from 'models/types';
import { StyleSheet } from 'react-native';
import { colors } from 'styles/colors';
import { typography } from 'styles/typography';
import { StorageContext } from 'navigation/StorageProvider';

const styles = StyleSheet.create({
  swiper: {
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
  info: {
    alignSelf: 'flex-start',
    marginRight: 10,
    marginTop: -1,
  },
});

export const LandmarkGroupCard = (props: LandmarkGroup) => {
  const {
    state: { landmarks },
  } = useContext(StorageContext);
  const groupLandmarks = Object.keys(landmarks).filter(
    (id) => landmarks[id].groupId === props.id,
  );
  const total = groupLandmarks.length;
  const visited = groupLandmarks.filter((id) => landmarks[id].isVisited).length;
  const completePercentage = Math.floor((visited * 100) / total);
  const cardInfo = { id: props.id, name: props.name, imageUrl: props.imageUrl };
  return (
    <BigCard route="Landmarks" cardInfo={cardInfo}>
      <CardItem style={styles.divider}>
        <H2>{props.name}</H2>
      </CardItem>
      <CardItem style={styles.swiper}>
        <Text style={styles.percentage}>{completePercentage}%</Text>
        <Text style={styles.info}>
          Вы посетили {visited} из {total} достопримечательностей
        </Text>
      </CardItem>
    </BigCard>
  );
};
