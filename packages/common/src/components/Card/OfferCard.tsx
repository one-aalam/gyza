import React from 'react';
import styled from 'styled-components';
import { View, Image, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { TitleBar } from '../Container';
import { Heading, Subheading } from '../StyledText';

interface ICardProps {
    className?: string;
    heading?: string;
    subheading?: string;
    image?: any;
    allCover?: boolean;
    onPress?: (evt: GestureResponderEvent) => void
}

export const OfferCard: React.SFC<ICardProps> = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
    <Container>
        <Cover>
            { props.image && <Image source={props.image} resizeMode={'cover'} />}
            <StyledTitleBar>
                <StyledHeading>{props.heading}</StyledHeading>
                <Subheading>{props.subheading}</Subheading>
            </StyledTitleBar>
        </Cover>
    </Container>
    </TouchableOpacity>
  );
}


const StyledTitleBar = styled(TitleBar)`
    z-index: 2;
    position: absolute;
    bottom: 0;
    left: 0;
`;

const Container = styled(View)`
  /* background: white; */
  width: 220px;
  height: 200px;
  border-radius: 10px;
  margin-left: 20px;
  /* margin-top: 20px; */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  /* overflow: hidden; */
`;

const Cover = styled(View)`
    border-radius: 10px;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

const StyledHeading = styled(Heading)`
    font-size: 24px;
    display: flex;
`;