import React, { useContext, useEffect } from 'react';
import { Button, Container, Content, H1, Text, View } from 'native-base';
import { colors } from 'styles/colors';
import * as Progress from 'react-native-progress';
import { StyleSheet } from 'react-native';
import { typography } from 'styles/typography';
import { StorageContext } from 'navigation/StorageProvider';
import { globalStyles } from 'styles/globalStyles';
import { ActionType } from 'models/types';

const styles = StyleSheet.create({
  progress: {
    color: colors.fontPrimary,
    fontFamily: typography.bigNumbersFont,
    fontSize: 36,
    paddingTop: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    paddingHorizontal: 30,
    textAlign: 'center',
  },
  level: {
    alignItems: 'center',
  },
});

export const ResultsScreen = ({ navigation, route }) => {
  const { state, dispatch } = useContext(StorageContext);
  const questId = route.params.id;
  const questExp = state.quests[questId].experience;
  useEffect(() => {
    if (!state.quests[questId].isCompleted) {
      setTimeout(
        () => dispatch({ type: ActionType.COMPLETE_QUEST, payload: questId }),
        100,
      );
    }
  }, []);

  const level =
    1 + Math.floor((Math.sqrt(625 + 100 * state.user.experience) - 25) / 50);
  const nextLevelExperience = 25 * (level + 1) * (1 + (level + 1));
  const levelProgress = state.user.experience / nextLevelExperience;

  return (
    <Container>
      <Content centerContent contentContainerStyle={styles.content}>
        <H1>Вы завершили квест!</H1>
        <View style={styles.level}>
          <H1 style={globalStyles.detailsHeading}>Уровень</H1>
          <Progress.Circle
            size={120}
            progress={levelProgress}
            thickness={5}
            showsText={true}
            formatText={() => level}
            color={colors.progress}
            unfilledColor={colors.gray}
            borderColor={'rgba(0,0,0,0)'}
            fill={colors.bgSecondary}
            textStyle={styles.progress}
          />
          <Text>+{questExp} опыта</Text>
        </View>
        <Button large block onPress={() => navigation.navigate('Quests')}>
          <Text>В меню</Text>
        </Button>
      </Content>
    </Container>
  );
};
