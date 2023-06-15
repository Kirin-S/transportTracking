import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TsList from './TsList';
import DriverScreen from '../DriverScreen/DriverScreen';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator();

const TransportScene = () => {
  const { t } = useTranslation();

  const driverPageTitle = t('Driver Screen Title');

  return (
    <Stack.Navigator initialRouteName='TsList'>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="TsList"
        component={TsList}
      />
      <Stack.Screen
        options={{
          title: driverPageTitle,
          headerStyle: {
            backgroundColor: '#aaa',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="DriverScreen"
        component={DriverScreen}
      />
    </Stack.Navigator>
  )
}

export default TransportScene