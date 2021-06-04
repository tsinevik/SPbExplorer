import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Landmark } from 'models/types';

export const getAll = async (userId: string) => {
  try {
    const fog = await getFog();
    console.log(fog);
    const queryQuests = await getQuests();
    const quests: { [key: string]: Landmark } = {};
    for (const quest of queryQuests) {
      quests[quest.id] = {
        ...quest,
        id: quest.id,
        latlng: [quest.latlng.latitude, quest.latlng.longitude],
      };
    }
    const landmarkGroups = await getLandmarkGroups();
    const landmarks: { [key: string]: Landmark } = {};
    for (const [i, group] of landmarkGroups.entries()) {
      const groupLandmarks = await getLandmarks(group.id);
      for (const landmark of groupLandmarks) {
        landmarks[landmark.id] = {
          ...landmark,
          id: landmark.id,
          groupId: group.id,
          latlng: [landmark.latlng.latitude, landmark.latlng.longitude],
        };
      }
      landmarkGroups[i] = { ...group, id: group.id };
    }

    return { fog, quests, landmarkGroups, landmarks };
  } catch (e) {
    return ['No document exists'];
  }
};

export const getFog = async () => {
  try {
    const fog = await AsyncStorage.getItem('fog');
    console.log('туман', fog);
    return fog != null ? JSON.parse(fog) : [];
  } catch (e) {
    throw e;
  }
};

export const getQuests = async () => {
  try {
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
      .limit(2)
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
