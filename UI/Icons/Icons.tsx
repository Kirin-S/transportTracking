import { Image, View } from 'react-native';
import React, { FC } from 'react';

// Getting an icon by name component

interface IIcons {
  icon: string;
}

const Icons: FC<IIcons> = ({icon}) => {
  const icons: any = {
    list: require('../../static/icons/list.png'),
    listOutlined: require('../../static/icons/listOutlined.png'),
    marker: require('../../static/icons/marker.png'),
    markerOutlined: require('../../static/icons/markerOutlined.png'),
    settings: require('../../static/icons/settings.png'),
    settingsOutlined: require('../../static/icons/settingsOutlined.png'),
    cargo: require('../../static/icons/truck.png'),
    passenger: require('../../static/icons/sedan.png'),
    specTransport: require('../../static/icons/forklift.png'),
    back: require('../../static/icons/back.png'),
  }

  if (!icons[icon]) {
    return <View></View>
  }

  return (
    <Image
      source={icons[icon]}
      style={{
        width: 25,
        height: 25,
      }}
    />
  )
}

export default Icons