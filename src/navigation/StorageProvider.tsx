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
      photoUrl: 'yoooooo',
    },
    '1': {
      title: 'Квест 1',
      address: 'Улица Пушкина, дом Колотушкина',
      description: 'yoooo',
      latlng: [59.939397, 30.321887],
      photoUrl: 'yoooooo',
    },
  },
  landmarks: {
    '0': { name: 'Случайная точка 1', latlng: [59.962453, 30.322507] },
    '1': { name: 'Случайная точка 2', latlng: [59.922697, 30.321387] },
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
