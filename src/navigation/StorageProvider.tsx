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

const db: GlobalState = {
  quests: {
    '0': {
      title: 'Квест 1',
      address: 'Улица Пушкина, дом Колотушкина',
      description: 'yoooo',
      latlng: [59.954353, 30.322607],
      completed: false,
      imageUrl:
        'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
      tasks: [
        {
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          imageUrl:
            'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
          type: 'short-answer',
          answer: 'yo1',
        },
        {
          description: 'lorem ipsуum lorem ipsum lorem ipsum lorem ipsum',
          imageUrl:
            'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
          type: 'short-answer',
          answer: 'yo2',
        },
      ],
    },
    '1': {
      title: 'Квест 1',
      address: 'Улица Пушкина, дом Колотушкина',
      description: 'yoooo',
      latlng: [59.939397, 30.321887],
      completed: false,
      imageUrl:
        'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
      tasks: [
        {
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          imageUrl:
            'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
          type: 'short-answer',
          answer: 'yo1',
        },
        {
          description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
          imageUrl:
            'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
          type: 'short-answer',
          answer: 'yo2',
        },
      ],
    },
  },
  landmarks: {
    '0': {
      name: 'Случайная точка 1',
      latlng: [59.962453, 30.322507],
      visited: false,
      imageUrl:
        'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
    },
    '1': {
      name: 'Случайная точка 2',
      latlng: [59.922697, 30.321387],
      visited: false,
      imageUrl:
        'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
    },
  },
  fog: [
    [59.954453, 30.322507],
    [59.939697, 30.321387],
    [59.954353, 30.322607],
    [59.939397, 30.321887],
  ],
};

export const StorageContext = createContext<StorageCtx>({
  state: db,
  dispatch: () => {},
});

const reducer = (state: GlobalState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_FOG:
      return {
        ...state,
        fog: [...state.fog, action.payload] as LatLng[],
      };
    case ActionType.VISIT_LANDMARK:
      const id = action.payload as string;
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
  const [state, dispatch] = useReducer(reducer, db);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('always');
    }
  }, []);

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
