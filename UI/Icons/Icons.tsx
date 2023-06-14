import { Image, View } from 'react-native';
import React, { FC } from 'react';

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
  }

  if (!icons[icon]) {
    return <View></View>
  }

  return (
    <Image
      source={icons[icon]}
      style={{
        width: 25,
        height: 25
      }}
    />
  )
}

export default Icons