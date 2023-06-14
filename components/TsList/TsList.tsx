import { View, FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import db from '../../db/db.json';
import TsItem from './TsItem';
import { Menu, Button } from 'react-native-paper';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ITransport } from '../../types/types';

const TsList = () => {
  const [data, setData] = useState<ITransport[]>(db.items);
  const [showMenu, setShowMenu] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [checked, setChecked] = useState({
    cargo: false,
    passenger: false,
    spec: false
  });

  const openMenu = () => setShowMenu(true);

  const closeMenu = () => setShowMenu(false);

  const onCheck = (category: string) => {
    setChecked(prev => ({...prev, [category]: !prev[category as keyof typeof checked]}));

    setActiveFilters(prev => {
      let arr = [...prev];

      if (arr.includes(category)) {
        arr = arr.filter((item: any) => item !== category);
      } else {
        arr.push(category);
      }

      return arr;
    });
  }

  const filters = [
    {title: 'Cargo', value: 'cargo', checked: checked.cargo},
    {title: 'Passenger', value: 'passenger', checked: checked.passenger},
    {title: 'Spec', value: 'spec', checked: checked.spec},
  ];

  const onApplyFilters = () => {
    setData(prev => {
      let arr = [...prev];

      if (activeFilters.length) {
        arr = db.items.filter((item: ITransport) => activeFilters.includes(item.category));
      } else {
        arr = db.items;
      }

      return arr;
    })
  }

  return (
    <View>
      <View style={styles.filterContainer}>
        <Menu
          visible={showMenu}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Filter {activeFilters.length > 0 ? activeFilters.length : ''}</Button>}
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

        <Button onPress={onApplyFilters}>Apply</Button>
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => <TsItem {...item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  filterItem: {
    padding: 10
  }
})

export default TsList