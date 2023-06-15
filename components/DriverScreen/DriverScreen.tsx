import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import Icons from '../../UI/Icons/Icons';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-native-paper';

const DriverScreen = () => {
  const { t } = useTranslation();

  const driverInfo = [
    {label: t('Category'), value: 'asdf'},
    {label: t('Driver'), value: 'ADSFASDF'},
    {label: t('Phone Number'), value: '9999999'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{
            latitude: 55.813182,
            longitude: 38.120451,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 55.813182,
              longitude: 38.120451,
            }}
          >
            <Icons icon={'cargo'} />
          </Marker>
        </MapView>
      </View>

      {driverInfo.map(item => (
        <View style={styles.infoBox}>
          <Text style={styles.text}>{item.label}</Text>
          <Text style={styles.text}>{item.value}</Text>
        </View>
      ))}
      <View style={styles.buttons}>
        <Button>{t('Call Button')}</Button>
        <Button>{t('Message Button')}</Button>
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