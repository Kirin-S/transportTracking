import { View, FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import db from '../../db/db.json';
import TsItem from './TsItem';
import { Menu, Button } from 'react-native-paper';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TsList = () => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState({
    cargo: false,
    passenger: false,
    spec: false
  })

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const onCheck = (type: string) => {
    setChecked((prev: any) => ({...prev, [type]: !prev[type]}));
  }

  const filters = [
    {title: 'Cargo', value: 'cargo'},
    {title: 'Passenger', value: 'passenger'},
    {title: 'Spec', value: 'spec'},
  ];

  const renderListFunc = (item: ITransport) => {
    return <TsItem {...item} />
  }

  return (
    <View>
      <View style={styles.filterContainer}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Filter</Button>}
          anchorPosition='bottom'
        >
          {filters.map((item: any) => (
            <View key={item.value} style={styles.filterItem}>
              <BouncyCheckbox
                size={25}
                fillColor="blue"
                unfillColor="#FFFFFF"
                text={item.title}
                iconStyle={{ borderColor: "blue" }}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={() => onCheck(item.value)}
              />
            </View>
          ))}
        </Menu>

        <Button onPress={() => null}>Apply</Button>
      </View>

      <FlatList
        data={db.items}
        renderItem={({item}) => renderListFunc(item)}
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