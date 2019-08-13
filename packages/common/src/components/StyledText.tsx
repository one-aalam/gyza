import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

export const MonoText: React.SFC = (props: any) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}

export const Heading: React.SFC = (props: any) => {
  return (
    <StyledHeading {...props} style={[props.style]} />
  );
}

export const Subheading: React.SFC = (props: any) => {
  return (
    <StyledSubheading {...props} style={[props.style]} />
  );
}

export const Paragraph: React.SFC = (props: any) => {
  return (
    <StyledParagraph {...props} style={[props.style]} />
  );
}

export const Highlight: React.SFC = (props: any) => {
  return (
    <StyledHighlight>
      <StyledHighlightText {...props} style={[props.style]}></StyledHighlightText>
    </StyledHighlight>
  );
}

export const TextSmall: React.SFC = (props:any) => {
  return (
    <StyledTextSmall {...props} style={[props.style]}></StyledTextSmall>
  );
}


const StyledSubheading = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  color: #b8bece;
`;

const StyledHeading = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #3c4560;
`;

const StyledParagraph = styled(Text)`
    font-size: 17;
    color: rgba(96,100,109, 1);
    line-height: 24;
    text-Align: center;
`;

const StyledHighlight = styled(View)`
  background-color: rgba(0,0,0,0.05);
  border-radius: 3px;
  padding: 4px;
`;

const StyledHighlightText = styled(MonoText)`
  color: rgba(96,100,109, 0.8);
`;

const StyledTextSmall = styled(Text)`
    margin-bottom: 20px;
    color: rgba(0,0,0,0.4);
    font-size: 14px;
    line-height: 19px;
    text-align: center;
`;

const Link = styled(Text)`
  font-size: 14px;
  color: #2e78b7;
`;
