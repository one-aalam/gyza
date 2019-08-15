import React from 'react';
import styled from 'styled-components';
import { View, Text, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

interface IRestaurantCardProps {
    className?: string;
    name?: string;
    dealsIn?: string;
    deliversIn?: string;
    rating: number;
    costs?: string;
    image?: any;
    offer?: string;
    allCover?: boolean;
}

export const RestaurantCard: React.SFC<IRestaurantCardProps> = props => {
    return (
      <ContainerWrapper>
        <SpecialTag>
          <SpecialTagText>EXCLUSIVE</SpecialTagText>
        </SpecialTag>
        <Container>
            <Cover>
                { props.image && <StyledImage source={props.image} />}
            </Cover>
        </Container>
        <View style={{paddingHorizontal: 10}}>
            <StyledHeading>{props.name}</StyledHeading>
            <StyledSubheading>{props.dealsIn}</StyledSubheading>
            <StyledHeading>{props.offer ? props.offer : ''}</StyledHeading>
            <Meta>
                <StyledMetaText>
                  <Icon name={ Platform.OS === 'ios' ? 'ios-star' : 'md-star' } size={14}/>
                  &nbsp;{props.rating? props.rating : '-'}
                </StyledMetaText>
                <Text>&nbsp;&nbsp;</Text>
                <StyledMetaText>
                  <Icon name={ Platform.OS === 'ios' ? 'ios-time' : 'md-time' } size={14}/>
                  &nbsp;{props.deliversIn ? props.deliversIn : '?'}
                </StyledMetaText>
                <Text>&nbsp;&nbsp;</Text>
                <StyledMetaText>
                  <FAIcon name={ 'rupee' } size={14}/>
                  {props.costs ? props.costs : ''}
                </StyledMetaText>
            </Meta>
        </View>
      </ContainerWrapper>
    );
  }

const SpecialTag = styled(View)`
  position: absolute;
  left: 15px;
  top: 10px;
  z-index: 4;
  background: red;
  padding: 2px;
  border-radius: 2px;
`;

const SpecialTagText = styled(Text)`
  font-size: 10px;
  font-weight: bold;
  color: white;
`;

const ContainerWrapper = styled(View)`
    flex: 1;
    flex-direction: row;
`;

const Container = styled(View)`
  /* background: white; */
  width: 100px;
  height: 100px;
  border-radius: 6px;
  margin-left: 20px;
  margin-bottom: 10px;
  /* margin-top: 20px; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  /* overflow: hidden; */
`;

const Cover = styled(View)`
    border-radius: 6px;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    overflow: hidden;
`;

const Meta = styled(View)`
  flex: 1;
  flex-direction: row;
  position: absolute;
  bottom: 15px;
  left: 10px;
`;

const StyledSubheading = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: #b8bece;
`;

const StyledMetaText = styled(Text)`
  font-size: 12px;
  font-weight: bold;
  color: #3c4560;
`;

const StyledHeading = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: #3c4560;
`;

const StyledImage = styled(Image)`
    flex: 1;
    width: null;
    height: null;
`;