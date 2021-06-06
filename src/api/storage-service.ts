import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Landmark } from 'models/types';
import auth from '@react-native-firebase/auth';

// Read methods

export const getAll = async () => {
  try {
    console.log('start downloading...');
    const user = await getCurrentUser();
    const { visitedLandmarks, completedQuests } = await getUserProgress(
      user.id,
    );
    const fog = await getFog();
    const queryQuests = await getQuests();
    const quests: { [key: string]: Landmark } = {};
    for (const quest of queryQuests) {
      quests[quest.id] = {
        ...quest,
        id: quest.id,
        latlng: [quest.latlng.latitude, quest.latlng.longitude],
        isCompleted: completedQuests.includes(quest.id),
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
          isVisited: visitedLandmarks.includes(landmark.id),
        };
      }
      landmarkGroups[i] = { ...group, id: group.id };
    }

    return { fog, quests, landmarkGroups, landmarks, user };
  } catch (e) {
    return ['No document exists'];
  }
};

export const getFog = async () => {
  try {
    const fog = await AsyncStorage.getItem('fog');
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

// export const getQuest = async () => {};

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
      .limit(3)
      .get();
    return landmarks.docs.map((landmark) => ({
      ...landmark.data(),
      id: landmark.id,
    }));
  } catch (e) {
    return ['No document exists'];
  }
};

// export const getLandmark = async () => {};

const getCurrentUser = async () => {
  try {
    const userId = await auth().currentUser?.uid;
    const user = await firestore().collection('users').doc(userId).get();
    return {
      ...user.data(),
      id: userId,
    };
  } catch (e) {
    return ['No document exists'];
  }
};

const getUserProgress = async (userId: string) => {
  try {
    const userRef = firestore().collection('users').doc(userId);
    const userLandmarks = await userRef.collection('visitedLandmarks').get();
    const userQuests = await userRef.collection('completedQuests').get();
    const visitedLandmarks = userLandmarks.docs.map((landmark) => landmark.id);
    const completedQuests = userQuests.docs.map((quest) => quest.id);
    return {
      visitedLandmarks,
      completedQuests,
    };
  } catch (e) {
    return ['No document exists'];
  }
};

// Write methods

export const updateVisitedLandmarks = async (
  landmarkId: string,
  userId: string,
) => {
  try {
    await firestore()
      .collection('users')
      .doc(userId)
      .collection('visitedLandmarks')
      .doc(landmarkId)
      .set({});
  } catch (e) {
    console.log(e);
  }
};

export const updateUserExperience = async (
  experience: number,
  userId: string,
) => {
  try {
    await firestore().collection('users').doc(userId).update({
      experience,
    });
  } catch (e) {
    console.log(e);
  }
};
