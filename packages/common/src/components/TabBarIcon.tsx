import React from 'react';
import Ionicons  from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

export const TabBarIcon: React.SFC = (props: any) => {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
