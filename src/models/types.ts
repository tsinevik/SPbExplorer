import React from 'react';

export interface Action {
  type: ActionType;
  payload: {};
}

export interface GlobalState {
  quests: Quest[];
  landmarks: Landmark[];
  fog: LatLng[];
}

export interface Quest {
  id: string;
  title: string;
  address: string;
  latlng: LatLng;
  description: string;
  photoUrl: string;
}

export interface Landmark {
  id: string;
  name: string;
  latlng: LatLng;
  description?: string;
  photoUrl?: string;
}

export enum ActionType {
  INITIAL = 'INITIAL',
  UPLOAD_FOG = 'UPLOAD_FOG',
}

export type LatLng = [number, number];

export type ChildProps = { children: React.ReactNode };
