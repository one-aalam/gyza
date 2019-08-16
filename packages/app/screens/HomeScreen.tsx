import * as WebBrowser from 'expo-web-browser';
import React, { ReactNode } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { Heading,
         Subheading,
         Container,
         TitleBar,
         Menu,
         BrandCard,
         OfferCard,
         RestaurantCard,
         EmphasisView
          } from '@gyza/common';


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
        <EmphasisView bgColor={'white'} heading={'919 RESTAURANTS'}>
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
            <EmphasisView bgColor={'whitesmoke'}
              heading={'in the spotlight'}
              subheading={'discover new tastes around you'}
              icon={'ios-star-outline'}
              center={true}
            >
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
            </EmphasisView>
        </ScrollView>
        </EmphasisView>
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