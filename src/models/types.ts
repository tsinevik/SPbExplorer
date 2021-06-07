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
  user: User;
}

export interface User {
  id: string;
  username: string;
  email: string;
  experience: number;
  imageUrl?: string;
  visitedLandmarks: string[];
  completedQuests: string[];
}

export interface Quest {
  id: string;
  title: string;
  address: string;
  latlng: LatLng;
  description: string;
  imageUrl: string;
  isCompleted: boolean;
  duration: number;
  length: number;
  experience: number;
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
  isVisited: boolean;
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
  COMPLETE_QUEST = 'COMPLETE_QUEST',
  EDIT_USER = 'EDIT_USER',
}

export type StorageCtx = {
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
};

export type LatLng = [number, number];

export type ChildProps = { children: React.ReactNode };

export type StyleProps = { [key: string]: Object } | number | false | null;
