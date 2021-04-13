import * as React from 'react';
import { WebView } from 'react-native-webview';
import { useContext, useEffect, useRef } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { StorageContext } from 'navigation/StorageProvider';
import { isPointVisited } from 'api/storage-service';
import { Action, LatLng } from 'models/types';

const handleMessage = (message: string) => {
  console.log(message);
};

export const MapScreen = ({ navigation }) => {
  let webViewRef = useRef(null!);
  const { state, dispatch } = useContext(StorageContext);

  useEffect(() => {
    Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const coords: LatLng = [latitude, longitude];
        if (!isPointVisited(state.fog, coords)) {
          const action = createMessage('FOG_UPDATE', coords);
          dispatch(action);
          sendMessage(action);
        }
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, distanceFilter: 10 },
    );
  });

  const createMessage = (type: string, payload: {}) => ({ type, payload });

  const sendMessage = (message: Action) => {
    // @ts-ignore
    webViewRef.current.postMessage(JSON.stringify(message));
  };

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: 'http://192.168.1.127:3000' }}
      onLoadEnd={() => sendMessage(createMessage('initial', state))}
      onMessage={(event) => handleMessage(event.nativeEvent.data)}
    />
  );
};
