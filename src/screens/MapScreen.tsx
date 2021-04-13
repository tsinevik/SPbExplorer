import * as React from 'react';
import { WebView } from 'react-native-webview';
import { useContext, useEffect, useRef } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { StorageContext } from 'navigation/StorageProvider';
import { isPointVisited } from 'api/storage-service';
import { LatLng } from 'models/types';

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
        const coords: LatLng = { latitude, longitude };
        if (!isPointVisited(state.fog, coords)) {
          dispatch({ type: 'FOG_UPDATE', payload: coords });
          sendMessage('COORDS', coords);
        }
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, distanceFilter: 10 },
    );
  });

  const sendMessage = (type: string, data: {}) => {
    const message = { type, data };
    // @ts-ignore
    webViewRef.current.postMessage(JSON.stringify(message));
  };

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: 'http://192.168.1.127:3000' }}
      // source={{uri: 'https://spbexplorer-5efb8.web.app'}}
      onLoadEnd={() => sendMessage('initial', state)}
      onMessage={(event) => handleMessage(event.nativeEvent.data)}
    />
  );
};
