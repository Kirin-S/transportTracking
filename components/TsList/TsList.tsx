import { View, FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import db from '../../db/db.json';
import TsItem from './TsItem';
import { Menu, Button } from 'react-native-paper';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ITransport } from '../../types/types';
import { useTranslation } from 'react-i18next';

// Transport List Screen

const TsList = ({ navigation }: any) => {
  const { t } = useTranslation();
  // List of data from database
  const [data, setData] = useState<ITransport[]>(db.items);
  const [showMenu, setShowMenu] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [checked, setChecked] = useState({
    Cargo: false,
    Passenger: false,
    Spec: false
  });

  const openMenu = () => setShowMenu(true);

  const closeMenu = () => setShowMenu(false);

  const onCheck = (category: string) => {
    setChecked(prev => ({...prev, [category]: !prev[category as keyof typeof checked]}));

    setActiveFilters(prev => {
      let arr = [...prev];

      // If category is already active then remove it
      // else add
      if (arr.includes(category)) {
        arr = arr.filter((item: any) => item !== category);
      } else {
        arr.push(category);
      }

      return arr;
    });
  }

  const filters = [
    {title: t('Cargo'), value: 'Cargo', checked: checked.Cargo},
    {title: t('Passenger'), value: 'Passenger', checked: checked.Passenger},
    {title: t('Spec'), value: 'Spec', checked: checked.Spec},
  ];

  const onApplyFilters = () => {
    setData(prev => {
      let arr = [...prev];

      // if there are active filters then filter the list
      // else show all
      if (activeFilters.length) {
        arr = db.items.filter((item: ITransport) => activeFilters.includes(item.category));
      } else {
        arr = db.items;
      }

      return arr;
    });
  }

  return (
    <View>
      <View style={styles.filterContainer}>
        <Menu
          visible={showMenu}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>{t('Filter')} {activeFilters.length > 0 ? activeFilters.length : ''}</Button>}
          anchorPosition='bottom'
        >
          {filters.map((item: {title: string, value: string, checked: boolean}) => (
            <View key={item.value} style={styles.filterItem}>
              <BouncyCheckbox
                size={25}
                fillColor="blue"
                unfillColor="#FFFFFF"
                text={item.title}
                iconStyle={{ borderColor: "blue" }}
                innerIconStyle={{ borderWidth: 2 }}
                isChecked={item.checked}
                onPress={() => onCheck(item.value)}
              />
            </View>
          ))}
        </Menu>

        <Button onPress={onApplyFilters}>{t('Apply')}</Button>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => <TsItem {...item} navigation={navigation} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  filterItem: {
    padding: 10
  }
})

export default TsList