import React, { createContext, useReducer } from 'react';
import { Action, ChildProps, GlobalState, LatLng } from 'models/types';

const db: GlobalState = {
  quests: [
    { latlng: [59.954353, 30.322607] },
    { latlng: [59.939397, 30.321887] },
  ],
  landmarks: [
    { latlng: [59.962453, 30.322507] },
    { latlng: [59.922697, 30.321387] },
  ],
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
    case 'FOG_UPDATE':
      return {
        ...state,
        fog: [...state.fog, action.payload] as LatLng[],
      };
    default:
      throw new Error();
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
