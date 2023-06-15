import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import Settings from './components/SettingsScreen/Settings';
import MapScreen from './components/MapScreen/MapScreen';
import Icons from './UI/Icons/Icons';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import TransportScene from './components/TsList/TransportScene';

function App() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [lang, setLang] = useState('en');

  const routes = [
    { key: 'tsList', title: t('TS List'), focusedIcon: () => <Icons icon='list' />, unfocusedIcon: () => <Icons icon='listOutlined' /> },
    { key: 'mapScreen', title: t('Map'), focusedIcon: () => <Icons icon='marker' />, unfocusedIcon: () => <Icons icon='markerOutlined' /> },
    { key: 'settings', title: t('Settings'), focusedIcon: () => <Icons icon='settings' />, unfocusedIcon: () => <Icons icon='settingsOutlined' /> },
  ];

  const renderScene = BottomNavigation.SceneMap({
    tsList: () => <TransportScene />,
    mapScreen: () => <MapScreen />,
    settings: () => <Settings lang={lang} setLang={setLang} />
  });

  return (
    <NavigationContainer>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </NavigationContainer>
  );
}

export default App;
