import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Colors from '../constants/Colors';

export const Container: React.SFC = (props: any) => {
  return (
    <ContainerStyled {...props} style={[props.style]} />
  );
}

export const TitleBar: React.SFC = (props: any) => {
  return (
    <StyledTitleBar {...props} style={[props.style]} />
  );
}

const ContainerStyled = styled(View)`
  flex: 1;
  background: #f0f3f5;
`;

const StyledTitleBar =  styled(View)`
  width: 100%;
  padding: 20px;
`;

const InfoContainer = styled(View)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* ...Platform.select({
    ios: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: -3 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    android: {
      elevation: 20,
    },
  }), */
  align-items: center;
  background-color: #fbfbfb;
  padding: 20px 0;
`;