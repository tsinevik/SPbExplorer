import * as React from 'react';
import { useContext, useEffect, useRef } from 'react';
import { WebView } from 'react-native-webview';
import Geolocation from 'react-native-geolocation-service';
import { StorageContext } from 'navigation/StorageProvider';
import {
  distanceBetweenPoints,
  isPointVisited,
  toLatLng,
} from 'api/geo-service';
import { Action, ActionType, LatLng } from 'models/types';
import { Platform } from 'react-native';

export const MapScreen = ({ navigation }) => {
  let webViewRef = useRef(null!);
  const { state, dispatch } = useContext(StorageContext);

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      (position) => {
        const coords = toLatLng(position);
        if (!isPointVisited(state.fog, coords)) {
          const action = createMessage(ActionType.UPDATE_FOG, coords);
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
        showsBackgroundLocationIndicator: true,
      },
    );

    return () => Geolocation.clearWatch(watchId);
  }, [dispatch, state.fog]);

  useEffect(() => {
    sendMessage(createMessage(ActionType.UPDATE_FOG, state.fog));
  }, [state.fog]);

  const createMessage = (type: ActionType, payload: {}): Action => ({
    type,
    payload,
  });

  const sendMessage = (message: Action) => {
    // @ts-ignore
    webViewRef.current.postMessage(JSON.stringify(message));
  };

  const handleMessage = (message: Action) => {
    const payload = message.payload;
    switch (message.type) {
      case ActionType.OPEN_QUEST:
        navigation.navigate('Quests', {
          screen: 'Details',
          params: payload,
        });
        break;
      case ActionType.OPEN_LANDMARK:
        navigation.navigate('Landmarks', {
          screen: 'Details',
          params: payload,
        });
        break;
      case ActionType.VISIT_LANDMARK:
        const { id, latlng } = payload;
        console.log('yoooo');
        Geolocation.getCurrentPosition(
          (position) => {
            const currentPosition = toLatLng(position);
            if (distanceBetweenPoints(currentPosition, latlng) < 50) {
              const action = createMessage(ActionType.VISIT_LANDMARK, id);
              dispatch(action);
              sendMessage(action);
            }
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
        break;
      default:
        console.log('error');
        throw Error('WRONG MESSAGE TYPE');
    }
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
      onMessage={(event) => handleMessage(JSON.parse(event.nativeEvent.data))}
      source={{ uri: 'http://192.168.1.127:3000' }}
      // source={{ uri: 'http://192.168.3.9:3000' }}
      // source={{ uri: 'https://spbexplorer-5efb8.web.app' }}
    />
  );
};
