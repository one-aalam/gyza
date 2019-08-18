import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Colors from '../constants/Colors';

interface IContainerProps {
  bgColor?: string;
}

export const Container: React.SFC = (props: any) => {
  return (
    <ContainerStyled {...props} />
  );
}
export const Content: React.SFC = (props: any) => {
  return (
    <StyledContent {...props} />
  );
}

export const Screen: React.SFC = (props: any) => {
  return (
    <ScreenStyled {...props} />
  );
}

export const TitleBar: React.SFC<IContainerProps> = (props: IContainerProps) => {
  return (
    <StyledTitleBar {...props} />
  );
}

const ContainerStyled = styled(View)`
  flex: 1;
  background: #fff;
`;

const ScreenStyled = styled(SafeAreaView)`
  flex: 1;
  background: #fff;
`;

const StyledTitleBar =  styled(View)<IContainerProps>`
  width: 100%;
  padding: 15px;
  background: ${props => props.bgColor ? props.bgColor : '#fff' };
`;

const StyledContent = styled(View)`
  padding-top: 20px;
  padding-bottom: 20px;
`

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