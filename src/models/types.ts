import React from 'react';

export interface Action {
  type: ActionType;
  payload: Payload;
}

type Payload = string | LatLng | object;

export interface GlobalState {
  quests: { [key: string]: Quest };
  landmarkGroups: { [key: string]: LandmarkGroup };
  landmarks: { [key: string]: Landmark };
  fog: LatLng[];
}

export interface Quest {
  id: string;
  title: string;
  address: string;
  latlng: LatLng;
  description: string;
  imageUrl: string;
  completed: boolean;
  duration: number;
  length: number;
  exp: number;
  tasks: Task[];
}

export interface Task {
  description: string;
  imageUrl: string;
  answer: string;
  type: TaskType;
  choices?: string[];
}

type TaskType = 'short-answer' | 'multiple-choice';

export interface Landmark {
  id: string;
  groupId: string;
  name: string;
  address: string;
  latlng: LatLng;
  visited: boolean;
  description?: string;
  imageUrl?: string;
}

export interface LandmarkGroup {
  id: string;
  name: string;
  total: number;
  imageUrl?: string;
}

export enum ActionType {
  INITIAL = 'INITIAL',
  UPDATE_FOG = 'UPDATE_FOG',
  OPEN_QUEST = 'OPEN_QUEST',
  OPEN_LANDMARK = 'OPEN_LANDMARK',
  VISIT_LANDMARK = 'VISIT_LANDMARK',
}

export type StorageCtx = {
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
};

export type LatLng = [number, number];

export type ChildProps = { children: React.ReactNode };

export type StyleProps = { [key: string]: Object } | number | false | null;
