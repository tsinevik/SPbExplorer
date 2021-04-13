export interface Action {
  type: string;
  payload: {};
}

export interface GlobalState {
  quests: { latlng: number[] }[];
  landmarks: { latlng: number[] }[];
  fog: LatLng[];
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

export type ChildProps = { children: React.ReactNode };
