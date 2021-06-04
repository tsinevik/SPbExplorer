import { LatLng } from 'models/types';
import { GeoPosition } from 'react-native-geolocation-service';

export const isPointVisited = (fog: LatLng[], point: LatLng) => {
  const radius = 25;
  return fog.some((fogPoint) => {
    return distanceBetweenPoints(fogPoint, point) < radius;
  });
};

export const toLatLng = (position: GeoPosition): LatLng => {
  const { latitude, longitude } = position.coords;
  return [+latitude.toFixed(6), +longitude.toFixed(6)];
};

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;

export const distanceBetweenPoints = (p1: LatLng, p2: LatLng) => {
  let [lat1, lng1] = p1;
  let [lat2, lng2] = p2;

  const earthRadiusMeters = 6371e3;

  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lng2 - lng1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusMeters * c;
};
