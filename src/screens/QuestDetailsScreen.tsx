import React, { useContext } from 'react';
import { Button, Container, Content, H1, Icon, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import { Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextIcon from 'components/TextIcon';
import { globalStyles } from 'styles/globalStyles';
import { StorageContext } from 'navigation/StorageProvider';

const styles = StyleSheet.create({
  header: {
    marginBottom: 40,
  },
  info: {
    ...globalStyles.flexRow,
    marginVertical: 15,
  },
  buttons: {
    ...globalStyles.flexRow,
  },
});

export const QuestDetailsScreen = ({ route }) => {
  const { state } = useContext(StorageContext);
  const id = route.params.id;
  const quest = state.quests[id];
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        {quest.hasOwnProperty('imageUrl') && (
          <Swiper style={globalStyles.swiper}>
            <View>
              <Image
                source={{
                  uri: quest.imageUrl,
                }}
                style={globalStyles.detailsImage}
              />
            </View>
            <View>
              <Image
                source={{
                  uri: quest.imageUrl,
                }}
                style={globalStyles.detailsImage}
              />
            </View>
          </Swiper>
        )}
        <View style={globalStyles.content}>
          <View style={styles.header}>
            <H1 style={globalStyles.detailsHeading}>{quest.title}</H1>
            <TextIcon iconName="map-marker-alt" text={quest.address} />
            <View style={styles.info}>
              <TextIcon iconName="clock" text={`${quest.duration} мин`} />
              <TextIcon
                iconName="shoe-prints"
                text={`${quest.length} км`}
                rotate
              />
              <TextIcon iconName="graduation-cap" text={quest.exp} />
            </View>
            <View style={globalStyles.flexRow}>
              <Button
                block
                large
                style={{ flex: 1, marginRight: 10 }}
                onPress={() =>
                  navigation.navigate('Modal', {
                    screen: 'Play',
                    params: { id },
                  })
                }>
                <Text>Начать</Text>
              </Button>
              <Button bordered large>
                <Icon type="FontAwesome5" name="directions" />
              </Button>
            </View>
          </View>
          <H1 style={globalStyles.detailsHeading}>Описание</H1>
          <Text>{quest.description}</Text>
        </View>
      </Content>
    </Container>
  );
};
