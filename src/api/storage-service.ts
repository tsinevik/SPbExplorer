import firestore from '@react-native-firebase/firestore';
import { LatLng } from 'models/types';

//todo вынести в общее состояние квесты и достопримечательности?
export const getQuests = async () => {
  try {
    // return firestore().collection('quests').get();
    const questList = await firestore().collection('quests').get();
    return questList.docs.map((quest) => ({
      ...quest.data(),
      id: quest.id,
    }));
  } catch (e) {
    return ['No document exists'];
  }
};

export const getQuest = async () => {};

export const getLandmarkGroups = async () => {
  try {
    const groupList = await firestore().collection('landmarkGroups').get();
    return groupList.docs.map((group) => ({
      ...group.data(),
      id: group.id,
    }));
  } catch (e) {
    return ['No document exists'];
  }
};

export const getLandmarks = async (groupId: string) => {
  try {
    const landmarks = await firestore()
      .collection('landmarkGroups')
      .doc(groupId)
      .collection('landmarks')
      .get();
    return landmarks.docs.map((landmark) => ({
      ...landmark.data(),
      id: landmark.id,
    }));
  } catch (e) {
    return ['No document exists'];
  }
};

export const getLandmark = async () => {};

export const getUser = async () => {};

export const isPointVisited = (fog: LatLng[], point: LatLng) => {
  const radius = 25;
  return fog.some((fogPoint) => {
    return distanceBetweenEarthCoordinates(fogPoint, point) < radius;
  });
};

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;

const distanceBetweenEarthCoordinates = (p1: LatLng, p2: LatLng) => {
  let [lat1, lng1] = p1;
  let [lat2, lng2] = p2;

  const earthRadiusMeters = 6371e3;

  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lng2 - lng1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusMeters * c;
};
