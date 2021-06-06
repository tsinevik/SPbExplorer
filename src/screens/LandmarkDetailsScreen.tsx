import React, { useContext } from 'react';
import { Button, Container, Content, H1, Icon, View, Text } from 'native-base';
import TextIcon from 'components/TextIcon';
import { globalStyles } from 'styles/globalStyles';
import { Image, StyleSheet } from 'react-native';
import { StorageContext } from 'navigation/StorageProvider';

const styles = StyleSheet.create({
  header: {
    ...globalStyles.flexRow,
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  showMap: {
    width: 60,
    justifyContent: 'center',
  },
  showIcon: {
    fontSize: 28,
  },
  title: {
    flexShrink: 1,
  },
});

export const LandmarkDetailsScreen = ({ route }) => {
  const { state } = useContext(StorageContext);
  const id = route.params.id;
  const landmark = state.landmarks[id];
  return (
    <Container>
      <Content>
        {landmark.hasOwnProperty('imageUrl') && (
          <View>
            <Image
              source={{
                uri: landmark.imageUrl,
              }}
              style={globalStyles.detailsImage}
            />
          </View>
        )}
        <View style={globalStyles.content}>
          <View style={styles.header}>
            <View style={styles.title}>
              <H1 style={globalStyles.detailsHeading}>{landmark.name}</H1>
              <TextIcon iconName={'map-marker-alt'} text={landmark.address} />
            </View>
            <Button bordered large style={styles.showMap}>
              <Icon
                type="FontAwesome5"
                name="map-pin"
                style={styles.showIcon}
              />
            </Button>
          </View>
          <H1 style={globalStyles.detailsHeading}>Историческая справка</H1>
          <Text>{landmark.description}</Text>
        </View>
      </Content>
    </Container>
  );
};
