import firestore from '@react-native-firebase/firestore';
//todo вынести в общее состояние квесты и достопримечательности?
export const getQuestList = async () => {
  try {
    // return firestore().collection('quests').get();
    const questList = await firestore().collection('quests').get();
    return questList.docs.map((quest) => quest.data());
  } catch (e) {
    return ['No document exists'];
  }
};

export const getQuest = async () => {};

export const getLandmarkGroupList = async () => {
  try {
    const groupList = await firestore().collection('landmarkGroups').get();
    return groupList.docs.map((group) => group.data());
  } catch (e) {
    return ['No document exists'];
  }
};

export const getLandmarkList = async () => {
  try {
    const landmarkList = await firestore().collection('landmarks').get();
    return landmarkList.docs.map((landmark) => landmark.data());
  } catch (e) {
    return ['No document exists'];
  }
};

export const getLandmark = async () => {};

export const getUser = async () => {};
