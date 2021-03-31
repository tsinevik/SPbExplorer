import * as React from 'react';
import { WebView } from 'react-native-webview';
import { useRef } from 'react';

const handleMessage = (message: string) => {
  console.log(message);
};

export const MapScreen = ({ navigation }) => {
  const webViewRef = useRef(null);

  const data = {
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
  };

  const firstRun = `
    window.mapData = ${JSON.stringify(data)};
    true;
  `;

  setTimeout(() => {
    console.log('SEND');
    webViewRef.current.postMessage('RECEIVED');
  }, 3000);

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: 'http://192.168.1.127:3000' }}
      // source={{uri: 'https://spbexplorer-5efb8.web.app'}}
      injectedJavaScriptBeforeContentLoaded={firstRun}
      onLoadEnd={() => webViewRef.current.postMessage('ROMA')}
      onMessage={(event) => handleMessage(event.nativeEvent.data)}
    />
  );
};
