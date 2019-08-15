import React from 'react';
import styled from 'styled-components';
import { View, Text, Image } from 'react-native';

interface ICardProps {
    className?: string;
    heading?: string;
    subheading?: string;
    image?: any;
    allCover?: boolean;
}

export const BrandCard: React.SFC<ICardProps> = props => {
  return (
    <BrandContainer>
        <Container>
            <Cover>
                { props.image && <StyledImage source={props.image} />}
            </Cover>
        </Container>
        <BrandMetaContainer>
            <BrandMetaName>{props.heading}</BrandMetaName>
            <BrandMetaTime>{props.subheading}</BrandMetaTime>
        </BrandMetaContainer>
    </BrandContainer>
  );
}

const StyledImage = styled(Image)`
    flex: 1;
    width: null;
    height: null;
`;

const BrandContainer = styled(View)`
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`;

const BrandMetaContainer = styled(View)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BrandMetaName = styled(Text)`
    text-transform: uppercase;
    font-weight: bold;
`;
const BrandMetaTime = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  color: #b8bece;
`;

const Container = styled(View)`
  /* background: white; */
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin: 0 0 10px;
  /* margin-top: 20px; */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  /* overflow: hidden; */
`;

const Cover = styled(View)`
    border-radius: 50px;
    z-index: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

const Heading = styled(Text)`
    font-size: 24px;
    display: flex;
`;