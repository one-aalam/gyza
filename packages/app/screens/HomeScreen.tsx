import * as WebBrowser from 'expo-web-browser';
import React, { ReactNode } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import { Heading,
         Subheading,
         Container,
         TitleBar,
         Menu,
         Card,
         BrandCard,
         OfferCard,
         RestaurantCard } from '@gyza/common';

interface IViewContainerProps {
  children: ReactNode;
  heading?: string;
  subheading?: string;
  bgColor?: string;
  center?: boolean;
  icon?: string;
};

export const ScrollViewContainer: React.SFC<IViewContainerProps> = ({
  children,
  heading,
  subheading,
  bgColor,
  center,
  icon
}) => {
  return (
    <View style={{
      backgroundColor: bgColor ? bgColor : null,
      display: 'flex',
      justifyContent: center ? 'center' : 'flex-start',
      alignItems: center ? 'center' : null
    }}>
{   icon && <Icon name={icon} size={32} style={{
          paddingTop: 20,
          paddingLeft: 20
        }}/>}
    {  heading &&
        <Text style={{
          textTransform: 'uppercase',
          paddingTop: 20,
          paddingLeft: 20,
          fontWeight: 'bold',
          borderBottomColor: 'green',
        }}>
        {heading}
        </Text>
    }
    {  subheading &&
        <Text style={{
          textTransform: 'uppercase',
          paddingBottom: 20,
          paddingLeft: 20
        }}>
        {subheading}
        </Text>
    }
    {children}
    </View>
  );
}

export const HomeScreen: React.SFC = () => {
  return (
    <Container>
      {/* <Menu/> */}
      <SafeAreaView>
      <ScrollView style={{height: '100%'}} showsVerticalScrollIndicator={false}>
        <TitleBar>
          <Heading>Hello, Aftab</Heading>
          {/* <Subheading>Aftab</Subheading> */}
          <Subheading>What are you havin' today?</Subheading>
          <Icon
            name={'ios-notifications'}
            size={26}
            style={{ position: 'absolute', top: 20, right: 20 }}
            color={'#4775f2'}
          />
        </TitleBar>
        <ScrollView
          style={styles.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}>
            <OfferCard
              image={require('../assets/images/xrttsx1487339558.jpg')}
              heading={"Enjoy 50% off"}
              subheading={"From Nathu's sweets"}
            ></OfferCard>
            <OfferCard
              image={require('../assets/images/xrttsx1487339558.jpg')}
              heading={"Enjoy 50% off"}
              subheading={"From Nathu's sweets"}
            ></OfferCard>
        </ScrollView>
        <ScrollViewContainer bgColor={'white'} heading={'919 RESTAURANTS'}>
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}>
            <RestaurantCard
              image={require('../assets/images/xrttsx1487339558.jpg')}
              name={'Refections'}
              dealsIn={'Juices, Bevarages, Salads'}
              deliversIn={'40 mins'}
              rating={2.4}
              offer={'40% off with coupon GYZA40'}
              costs={'400 per person'}
            />
            <RestaurantCard
              image={require('../assets/images/xrttsx1487339558.jpg')}
              name={'FreshMenu'}
              dealsIn={'Chinese, Continental, Italian, Mediterranean, ...'}
              deliversIn={'30 mins'}
              rating={4.2}
              costs={'300 per person'}
            />
            <ScrollViewContainer bgColor={'whitesmoke'}
              heading={'in the spotlight'}
              subheading={'discover new tastes around you'}
              icon={'ios-star-outline'}
              center={true}
            >
              {
                // popular brands
                // vegeterian options
                // offers near you
                // gyza exclusives
                // pocket friendly
              }
                <ScrollView
                  style={styles.container}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.contentContainer}>
                    <BrandCard
                      image={require('../assets/images/xrttsx1487339558.jpg')}
                      heading={'domino\'s pizza'}
                      subheading={'30 mins'}
                    ></BrandCard>
                    <BrandCard
                      image={require('../assets/images/xrttsx1487339558.jpg')}
                      heading={'pizza hut'}
                      subheading={'45 mins'}
                    ></BrandCard>
                    <BrandCard
                      image={require('../assets/images/xrttsx1487339558.jpg')}
                      heading={'domino\'s pizza'}
                      subheading={'30 mins'}
                    ></BrandCard>
                    <BrandCard
                      image={require('../assets/images/xrttsx1487339558.jpg')}
                      heading={'pizza hut'}
                      subheading={'45 mins'}
                    ></BrandCard>
                </ScrollView>
            </ScrollViewContainer>
        </ScrollView>
        </ScrollViewContainer>
      </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

// HomeScreen.navigationOptions = {
//   header: null,
// };


function handlePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  }
});