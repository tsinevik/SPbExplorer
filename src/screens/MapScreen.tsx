import * as React from 'react';
import { useContext, useEffect, useRef } from 'react';
import { WebView } from 'react-native-webview';
import Geolocation from 'react-native-geolocation-service';
import { StorageContext } from 'navigation/StorageProvider';
import { isPointVisited } from 'api/storage-service';
import { Action, ActionType, LatLng } from 'models/types';
import { Platform } from 'react-native';

const handleMessage = (message: string) => {
  console.log(message);
};

export const MapScreen = ({ navigation }) => {
  let webViewRef = useRef(null!);
  const { state, dispatch } = useContext(StorageContext);

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const coords: LatLng = [+latitude.toFixed(6), +longitude.toFixed(6)];
        // console.log(coords);
        // console.log(state.fog);
        if (!isPointVisited(state.fog, coords)) {
          // console.log('add new point to state');
          // console.log(state.fog);
          const action = createMessage(ActionType.UPLOAD_FOG, coords);
          dispatch(action);
        }
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 25,
      },
    );

    return () => Geolocation.clearWatch(watchId);
  }, [dispatch, state.fog]);

  useEffect(() => {
    sendMessage(createMessage(ActionType.UPLOAD_FOG, state.fog));
  }, [state.fog]);

  const createMessage = (type: ActionType, payload: {}): Action => ({
    type,
    payload,
  });

  const sendMessage = (message: Action) => {
    // @ts-ignore
    webViewRef.current.postMessage(JSON.stringify(message));
  };

  const sourceUri =
    (Platform.OS === 'android' ? 'file:///android_asset/' : '') +
    'Web.bundle/loader.html';

  const params = 'platform=' + Platform.OS;
  const injectedJS = `
  if (!window.location.search) {
    const link = document.getElementById('progress-bar');
    link.href = './site/index.html?${params}';
    link.click();
  }
`;

  return (
    <WebView
      ref={webViewRef}
      // injectedJavaScript={injectedJS}
      // source={{ uri: sourceUri }}
      // javaScriptEnabled={true}
      // originWhitelist={['*']}
      // allowFileAccess={true}
      onLoadEnd={() => sendMessage(createMessage(ActionType.INITIAL, state))}
      onMessage={(event) => handleMessage(event.nativeEvent.data)}
      source={{ uri: 'http://192.168.1.127:3000' }}
      // source={{ uri: 'https://spbexplorer-5efb8.web.app' }}
    />
  );
};
