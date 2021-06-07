import React, { createContext, useEffect, useReducer } from 'react';
import {
  Action,
  ActionType,
  ChildProps,
  GlobalState,
  LatLng,
  StorageCtx,
} from 'models/types';
import { Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import SplashScreen from 'react-native-splash-screen';
import {
  getAll,
  updateCompletedQuests,
  updateFog,
  updateUser,
  updateUserExperience,
  updateVisitedLandmarks,
} from 'api/storage-service';
import Loading from 'navigation/Loading';

export const StorageContext = createContext<StorageCtx>({
  state: {},
  dispatch: () => {},
});

const reducer = (state: GlobalState, action: Action) => {
  const payload = action.payload;
  switch (action.type) {
    case ActionType.INITIAL:
      const { fog, quests, landmarkGroups, landmarks, user } = payload;
      return {
        ...state,
        fog,
        quests,
        landmarkGroups,
        landmarks,
        user,
      };
    case ActionType.UPDATE_FOG: {
      const newFog = [...state.fog, payload] as LatLng[];
      const newExperience = state.user.experience + 10;
      updateFog(newFog);
      updateUserExperience(newExperience, state.user.id);
      return {
        ...state,
        experience: newExperience,
        fog: newFog,
      };
    }
    case ActionType.VISIT_LANDMARK: {
      const landmarkId = payload as string;
      const newExperience = state.user.experience + 100;
      const userId = state.user.id;
      updateVisitedLandmarks(landmarkId, userId);
      updateUserExperience(newExperience, userId);
      return {
        ...state,
        user: {
          ...state.user,
          experience: newExperience,
        },
        landmarks: {
          ...state.landmarks,
          [landmarkId]: { ...state.landmarks[landmarkId], isVisited: true },
        },
      };
    }
    case ActionType.COMPLETE_QUEST: {
      const questId = payload as string;
      const newExperience =
        state.user.experience + state.quests[questId].experience;
      const userId = state.user.id;
      updateCompletedQuests(questId, userId);
      updateUserExperience(newExperience, userId);
      return {
        ...state,
        user: {
          ...state.user,
          experience: newExperience,
        },
        quests: {
          ...state.quests,
          [questId]: { ...state.quests[questId], isCompleted: true },
        },
      };
    }
    case ActionType.EDIT_USER: {
      const { username, email } = payload;
      updateUser(state.user.id, { username, email });
      return {
        ...state,
        user: {
          ...state.user,
          username,
          email,
        },
      };
    }
    default:
      console.log('WRONG ACTION TYPE!');
      return state;
  }
};

export const StorageProvider = ({ children }: ChildProps) => {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    getAll().then((query) => {
      dispatch({ type: ActionType.INITIAL, payload: query });
    });
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
  }, []);

  if (!(state.quests && state.landmarkGroups && state.fog)) {
    console.log('state check', state);
    return <Loading />;
  }
  console.log('state check', state);
  SplashScreen.hide();
  return (
    <StorageContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </StorageContext.Provider>
  );
};
