import * as React from 'react';
import * as Progress from 'react-native-progress';
import {
  Button,
  Card,
  Container,
  Content,
  H1,
  Icon,
  Text,
  View,
} from 'native-base';
import Achievement from 'components/Achievement';
import Friend from 'components/Friend';
import UserAvatar from 'react-native-user-avatar';
import { colors } from 'styles/colors';
import { StyleSheet } from 'react-native';
import { typography } from 'styles/typography';
import { globalStyles } from 'styles/globalStyles';
import Statistic from 'components/Statistic';
import { useContext } from 'react';
import { StorageContext } from 'navigation/StorageProvider';

const styles = StyleSheet.create({
  progress: {
    color: colors.fontPrimary,
    fontFamily: typography.bigNumbersFont,
    fontSize: 36,
    paddingTop: 10,
  },
  settings: {
    alignSelf: 'flex-end',
  },
  cogIcon: {
    color: colors.primary,
    fontSize: 40,
    marginRight: 10,
  },
  mainInfo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  name: {
    marginVertical: 15,
  },
  textCard: {
    margin: 10,
  },
  cardTitle: {
    paddingLeft: 10,
  },
  card: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  statGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  showAll: {
    alignSelf: 'flex-end',
  },
  cardItem: {
    marginBottom: 16,
  },
});

export const ProfileScreen = ({ navigation }) => {
  const {
    state: { user },
  } = useContext(StorageContext);
  const userInfo = {
    name: 'Roman Tsinevich',
    imageUrl: '',
    level: 5,
    completedQuests: 3,
    experience: 1300,
    visitedLandmarks: 6,
    cityKnowledge: 43,
  };

  const friends = [
    { name: 'Наталья Янковская', imageUrl: '' },
    { name: 'Виктор Тимохов', imageUrl: '' },
  ];

  const level =
    1 + Math.floor((Math.sqrt(625 + 100 * user.experience) - 25) / 50);
  const nextLevelExperience = 25 * (level + 1) * (1 + (level + 1));
  const levelProgress = user.experience / nextLevelExperience;

  return (
    <Container>
      <Content>
        <Button
          large
          transparent
          style={styles.settings}
          onPress={() => navigation.navigate('Settings', { user })}>
          <Icon type="FontAwesome5" name="cog" style={styles.cogIcon} />
        </Button>
        <View style={styles.mainInfo}>
          <UserAvatar size={170} name={user.username} src={user.imageUrl} />
          <H1 style={styles.name}>{user.username}</H1>
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
        </View>
        <View style={styles.textCard}>
          <H1 style={styles.cardTitle}>Статистика</H1>
          <Card style={styles.card}>
            <View style={[styles.statGrid, styles.cardItem]}>
              <Statistic
                label="Пройдено квестов"
                value={userInfo.completedQuests}
              />
              <Statistic label="Всего опыта" value={user.experience} />
            </View>
            <View style={styles.statGrid}>
              <Statistic
                label="Посещено мест"
                value={userInfo.visitedLandmarks}
              />
              <Statistic
                label="% изученности города"
                value={userInfo.cityKnowledge}
              />
            </View>
          </Card>
        </View>
        <View style={styles.textCard}>
          <H1 style={styles.cardTitle}>Друзья</H1>
          <Card style={styles.card}>
            <Friend
              name={friends[0].name}
              imageUrl={friends[0].imageUrl}
              style={styles.cardItem}
            />
            <Friend
              name={friends[1].name}
              imageUrl={friends[1].imageUrl}
              style={styles.cardItem}
            />
            <Button bordered style={styles.showAll}>
              <Text>Все</Text>
            </Button>
          </Card>
        </View>
        <View style={styles.textCard}>
          <H1 style={styles.cardTitle}>Достижения</H1>
          <Card style={styles.card}>
            <Achievement
              task={'Пройти 4 квеста'}
              total={4}
              progress={2}
              style={styles.cardItem}
            />
            <Achievement
              task={'Пройти 4 квеста'}
              total={4}
              progress={2}
              style={styles.cardItem}
            />
            <Button bordered style={styles.showAll}>
              <Text>Все</Text>
            </Button>
          </Card>
        </View>
      </Content>
    </Container>
  );
};
