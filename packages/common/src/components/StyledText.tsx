import React from 'react';
import { Text } from 'react-native';

export const MonoText: React.SFC = (props: any) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}
