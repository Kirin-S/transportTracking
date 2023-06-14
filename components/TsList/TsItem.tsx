import { View, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';

interface ITransportItem {
  name: string;
  type: string;
  driver: string;
}

const TsItem: FC<ITransportItem> = ({ name, type, driver }) => {
  return (
    <View>
      <Text>Category: {type}</Text>
      <Text>TS: {name}</Text>
      <Text>Driver: {driver}</Text>
    </View>
  )
}

export default TsItem