import React, { ReactNode } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

/**
 *  For stuff like
 *              popular brands
                vegeterian options
                offers nearby
                exclusives
                pocket friendly
 */

interface IEmphasisViewProps {
    children: ReactNode;
    heading?: string;
    subheading?: string;
    bgColor?: string;
    center?: boolean;
    icon?: string;
};

export const EmphasisView: React.SFC<IEmphasisViewProps> = ({
    children,
    heading,
    subheading,
    icon
  }) => {
    return (
      <StyledView>
  {   icon && <Icon name={icon} size={32} style={{
            paddingTop: 20,
            paddingLeft: 20
          }}/>}
      {  heading &&
          <HeadingText>
            {heading}
          </HeadingText>
      }
      {  subheading &&
          <Subheading>
            {subheading}
          </Subheading>
      }
      {children}
      </StyledView>
    );
  }

const StyledView = styled.View<IEmphasisViewProps>`
  background-color: ${props => props.bgColor ? props.bgColor : 'white' };
  ${props => props.center ? `
    justify-content: center;
    align-items: center;`
    : ''
  };
`;

const Subheading = styled.Text`
    text-transform: uppercase;
    padding-top: 5px;
    padding-left: 20px;
`;

const HeadingText = styled(Subheading)`
    font-weight: bold;
    border-bottom-color: green;
`;

