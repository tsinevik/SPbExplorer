import React from 'react';

export interface Action {
  type: string;
  payload: {};
}

export interface GlobalState {
  quests: Quest[];
  landmarks: Landmark[];
  fog: LatLng[];
}

export interface Quest {
  title: string;
  address: string;
  latlng: LatLng;
  description: string;
  photoUrl: string;
}

export interface Landmark {
  name: string;
  latlng: LatLng;
  description?: string;
  photoUrl?: string;
}

export type LatLng = [number, number];

export type ChildProps = { children: React.ReactNode };
