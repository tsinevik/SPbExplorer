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
import { getAll } from 'api/storage-service';
import Loading from 'navigation/Loading';

export const StorageContext = createContext<StorageCtx>({
  state: {},
  dispatch: () => {},
});

const reducer = (state: GlobalState, action: Action) => {
  const payload = action.payload;
  switch (action.type) {
    case ActionType.INITIAL:
      const { fog, quests, landmarkGroups, landmarks } = payload;
      return {
        ...state,
        fog,
        quests,
        landmarkGroups,
        landmarks,
      };
    case ActionType.UPDATE_FOG:
      return {
        ...state,
        fog: [...state.fog, payload] as LatLng[],
      };
    case ActionType.VISIT_LANDMARK:
      const id = payload as string;
      return {
        ...state,
        landmarks: {
          ...state.landmarks,
          [id]: { ...state.landmarks[id], visited: true },
        },
      };
    default:
      console.log('WRONG ACTION TYPE!');
      return state;
  }
};

export const StorageProvider = ({ children }: ChildProps) => {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    getAll('0').then((query) => {
      dispatch({ type: ActionType.INITIAL, payload: query });
    });
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
  }, []);

  if (!(state.quests && state.landmarkGroups && state.fog)) {
    console.log('проверка', state);
    return <Loading />;
  }
  console.log('проверка', state);
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
