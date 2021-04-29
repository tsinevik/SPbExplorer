import React, { createContext, useReducer } from 'react';
import {
  Action,
  ActionType,
  ChildProps,
  GlobalState,
  LatLng,
} from 'models/types';

const db: GlobalState = {
  quests: {
    '0': {
      title: 'Квест 1',
      address: 'Улица Пушкина, дом Колотушкина',
      description: 'yoooo',
      latlng: [59.954353, 30.322607],
      photoUrl:
        'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
    },
    '1': {
      title: 'Квест 1',
      address: 'Улица Пушкина, дом Колотушкина',
      description: 'yoooo',
      latlng: [59.939397, 30.321887],
      photoUrl:
        'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
    },
  },
  landmarks: {
    '0': {
      name: 'Случайная точка 1',
      latlng: [59.962453, 30.322507],
      isVisited: false,
      photoUrl:
        'https://visit-petersburg.ru/media/uploads/tourobject/196476/196476_cover.png.1050x700_q95_crop_upscale.png',
    },
    '1': {
      name: 'Случайная точка 2',
      latlng: [59.922697, 30.321387],
      isVisited: false,
      photoUrl:
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

type Context = {
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
};

export const StorageContext = createContext<Context>({
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
          [id]: { ...state.landmarks[id], isVisited: true },
        },
      };
    default:
      console.log('WRONG ACTION TYPE!');
      return state;
  }
};

export const StorageProvider = ({ children }: ChildProps) => {
  const [state, dispatch] = useReducer(reducer, db);

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
