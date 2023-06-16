import { View, Text, StyleSheet, Linking } from 'react-native';
import React, { useEffect, useState, useMemo } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Icons from '../../UI/Icons/Icons';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';
import db from '../../db/db.json';
import { ITransport } from '../../types/types';

// Transport showing data component

const DriverScreen = ({route}: any) => {
  const { t } = useTranslation();
  const [driverData, setDriverData] = useState<ITransport>({
    driver: '',
    transportName: '',
    category: '',
    phoneNumber: '',
    position: {
      latitude: 0,
      latitudeDelta: 0,
      longitude: 0,
      longitudeDelta: 0
    }
  });

  const driverInfo = [
    {label: t('Category'), value: driverData.category},
    {label: t('Driver'), value: driverData.driver},
    {label: t('Phone Number'), value: driverData.phoneNumber},
  ];

  useEffect(() => {
    const driver = db.items.find(item => item.transportName === route.params.transportName);

    if (driver) {
      setDriverData(driver);
    }
  }, []);

  const renderDriverData = useMemo(() => (
    driverInfo.map(item => (
      <View key={item.label} style={styles.infoBox}>
        <Text style={styles.text}>{item.label}</Text>
        <Text style={styles.text}>{item.value}</Text>
      </View>
    ))
  ), [driverData]);

  const onCall = () => {
    Linking.openURL(`tel:${driverData.phoneNumber}`);
  }

  const onMessage = () => {
    // There is a problem with this part. I did not find how to install WhatsApp on
    // Android Studio Virtual Device, so did not test
    const message = 'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе';
    Linking.openURL(`whatsapp://send?phone=${driverData.phoneNumber}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{
            latitude: driverData.position.latitude,
            longitude: driverData.position.longitude,
            latitudeDelta: driverData.position.latitudeDelta,
            longitudeDelta: driverData.position.longitudeDelta,
          }}
        >
          <Marker
            coordinate={{
              latitude: driverData.position.latitude,
              longitude: driverData.position.longitude
            }}
          >
            <Icons icon={driverData.category === 'Cargo' ? 'cargo' : driverData.category === 'Passenger' ? 'passenger' : 'specTransport'} />
          </Marker>
        </MapView>
      </View>

      {renderDriverData}

      <View style={styles.buttons}>
        <Button onPress={onCall}>{t('Call Button')}</Button>
        <Button onPress={onMessage}>{t('Message Button')}</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: '50%',
    width: '90%',
    marginTop: 10,
    marginHorizontal: '5%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  infoBox: {
    width: '100%',
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 20,
    color: '#000',

  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20
  }
})

export default DriverScreen