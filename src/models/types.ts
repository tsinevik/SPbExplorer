import React from 'react';

export interface Action {
  type: string;
  payload: {};
}

export interface GlobalState {
  quests: { latlng: number[] }[];
  landmarks: { latlng: number[] }[];
  fog: LatLng[];
}

export type LatLng = [number, number];

export type ChildProps = { children: React.ReactNode };
