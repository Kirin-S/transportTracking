import React from 'react';
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import db from '../../db/db.json';
import Icons from '../../UI/Icons/Icons';

// Map screen

const MapScreen = () => {
  return (
    <View style={styles.container}>
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
        {db.items.map(item => (
          <Marker
            key={item.transportName}
            coordinate={item.position}
          >
            <Icons icon={item.category === 'Cargo' ? 'cargo' : item.category === 'Passenger' ? 'passenger' : 'specTransport'} />
          </Marker>
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;