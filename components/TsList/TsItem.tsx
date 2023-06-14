import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { FC } from 'react';

interface ITransportItem {
  transportName: string;
  category: string;
  driver: string;
}

const TsItem: FC<ITransportItem> = ({ transportName, category, driver }) => {
  return (
    <TouchableOpacity style={styles.field}>
      <View style={styles.main}>
        <Text style={styles.categoryText}>Category: {category}</Text>
        <Text style={styles.transportText}>Transport: {transportName}</Text>
      </View>
      <View>
        <Text style={styles.driverText}>Driver: {driver}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  field: {
    width: '100%',
    height: 50,
    padding: 10,
    marginBottom: 10
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    width: '50%',
    fontSize: 20
  },
  transportText: {
    width: '50%',
    fontSize: 20
  },
  driverText: {
    fontSize: 20
  }
})

export default TsItem