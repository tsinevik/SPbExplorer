import * as React from 'react';
import { WebView } from 'react-native-webview';
import { useRef } from 'react';
import Geolocation from 'react-native-geolocation-service';

const handleMessage = (message: string) => {
  console.log(message);
};

export const MapScreen = ({ navigation }) => {
  const webViewRef = useRef(null);

  const data = {
    type: 'initial',
    data: {
      quests: [
        { latlng: [59.954353, 30.322607] },
        { latlng: [59.939397, 30.321887] },
      ],
      landmarks: [
        { latlng: [59.962453, 30.322507] },
        { latlng: [59.922697, 30.321387] },
      ],
      fog: [
        [59.954453, 30.322507],
        [59.939697, 30.321387],
        [59.954353, 30.322607],
        [59.939397, 30.321887],
      ],
    },
  };

  Geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];
      console.log(coords);
      if (!data.data.fog.includes(coords)) {
        data.data.fog.push(coords);
        webViewRef.current.postMessage(
          JSON.stringify({ type: 'COORDS', data: coords }),
        );
      }
    },
    (error) => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    { enableHighAccuracy: true, distanceFilter: 5 },
  );

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: 'http://192.168.1.127:3000' }}
      // source={{uri: 'https://spbexplorer-5efb8.web.app'}}
      onLoadEnd={() => webViewRef.current.postMessage(JSON.stringify(data))}
      onMessage={(event) => handleMessage(event.nativeEvent.data)}
    />
  );
};
