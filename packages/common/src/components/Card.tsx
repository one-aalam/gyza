import React from 'react';
import styled from 'styled-components';
import { View, Text, Image } from 'react-native';
import Colors from '../constants/Colors';
import { TitleBar } from './Container';
import { Heading, Subheading } from './StyledText';

interface ICardProps {
    className?: string;
    heading?: string;
    subheading?: string;
    image?: string;
    onLoad?: () => void
}

export const Card: React.SFC<ICardProps> = props => {
  return (
    <Container>
        <Cover>
            {/* <Image source={props.onLoad}></Image> */}
            <TitleBar>
                <Heading>{props.heading}</Heading>
                <Subheading>{props.subheading}</Subheading>
            </TitleBar>
        </Cover>
        <Content>
            <Avatar></Avatar>
            <TitleBar>
                <Heading>{props.heading}</Heading>
                <Subheading>{props.subheading}</Subheading>
            </TitleBar>
        </Content>
    </Container>
  );
}

const Container = styled(View)`
    background: white;
    width: 315px;
    height: 280px;
    border-radius: 14px;
    margin-left: 20px;
    margin-top: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled(View)`
    width: 100%;
    height: 200px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
    background: yellow;
`;

const Avatar = styled(View)`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: red;
`;

const Content = styled(TitleBar)`
    flex-direction: row;
    align-items: center;
    padding: 0;
    padding-left: 20px;
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

