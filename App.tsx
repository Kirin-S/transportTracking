import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Settings from './components/SettingsScreen/Settings';
import TsList from './components/TsList/TsList';
import MapScreen from './components/MapScreen/MapScreen';
import Icons from './UI/Icons/Icons';

function App() {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'tsList', title: 'TS LIST', focusedIcon: () => <Icons icon='list' />, unfocusedIcon: () => <Icons icon='listOutlined' /> },
    { key: 'mapScreen', title: 'MAP', focusedIcon: () => <Icons icon='marker' />, unfocusedIcon: () => <Icons icon='markerOutlined' /> },
    { key: 'settings', title: 'Settings', focusedIcon: () => <Icons icon='settings' />, unfocusedIcon: () => <Icons icon='settingsOutlined' /> },
  ];

  const renderScene = BottomNavigation.SceneMap({
    tsList: () => <TsList />,
    mapScreen: () => <MapScreen />,
    settings: () => <Settings />
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default App;
