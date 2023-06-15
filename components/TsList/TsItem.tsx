import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface ITransportItem {
  transportName: string;
  category: string;
  driver: string;
  navigation: any;
}

const TsItem: FC<ITransportItem> = ({ transportName, category, driver, navigation }) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DriverScreen')}>
      <Text style={styles.transportText}>{t('Transport')}: {transportName}</Text>
      <Text style={styles.categoryText}>{t('Category')}: {t(category)}</Text>
      <Text style={styles.driverText}>{t('Driver')}: {driver}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    marginHorizontal: '5%',
    marginBottom: 10,
    padding: 10
  },
  transportText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10
  },
  categoryText: {
    fontSize: 16,
    marginRight: 10
  },
  driverText: {
    fontSize: 16
  }
})

export default TsItem