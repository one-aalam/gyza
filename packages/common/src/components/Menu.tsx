import React, { useState, useEffect  } from 'react';
import {
  Dimensions,
  Animated,
  View,
  TouchableOpacity
} from 'react-native';
import styled from 'styled-components';
// import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const screenHeight = Dimensions.get('window').height;

export const Menu: React.SFC = (props: any) => {
  const [top, setTop ] = useState(new Animated.Value(screenHeight))
  const [showMenu, setShowMenu ] = useState(props.showMenu)

  useEffect(()=> {
    // if (showMenu) {
        Animated.spring(top, { toValue: 0}).start();
    // }
  }, [top, showMenu])

  const toggleMenu = () => {
      Animated.spring(top, { toValue: screenHeight}).start()
  }

  return (
    <AnimatedContainer {...props} style={{top: top}}>
        <Cover/>
        <CloseWrapper onPress={toggleMenu} >
                {/* <Ionicons
                    name={'ios-close'}
                    size={26}
                    style={{ marginBottom: -3 }}
                    color={'black'}
                /> */}
        </CloseWrapper>
        <Content/>
    </AnimatedContainer>
  );
}

const CloseWrapper = styled(TouchableOpacity)`
    position: absolute;
    top: 120px;
    left: 50%;
    margin-left: -22px;
    z-index: 1;

    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: white;
    justify-content: center;
    align-items: center;

    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Container = styled(View)`
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    z-index: 100;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled(View)`
    height: 142px;
    background: black;
`;

const Content = styled(View)`
    height: ${screenHeight}px;
    background: #f0f3f5;
`;