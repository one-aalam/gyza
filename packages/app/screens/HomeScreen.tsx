import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

import {
        Screen,
          Heading,
         Subheading,
         TitleBar,
         Menu,
         BrandCard,
         OfferCard,
         RestaurantCard,
         EmphasisView,

         random,
         IRestaurant,
         RESTAURANT_DATA
          } from '@gyza/common';

export const HomeScreen = ({ navigation }) => {

  const onPress = (r: {restaurant: IRestaurant}) => {
    navigation.navigate('Info', r)
  }
  const insertEmphasisAt = 2;
  const getCuisineImage = () => `../assets/images/items/cuisine-${random(0, 7)}.jpg`;

  return (
    <Screen>
      <ScrollView style={{height: '100%'}} showsVerticalScrollIndicator={false}>
        <TitleBar>
          <Heading>DELIVERING</Heading>
          <Subheading>NOW &rarr; HOME</Subheading>
          <Icon
            name={'ios-notifications'}
            size={26}
            style={{ position: 'absolute', top: 20, right: 20 }}
            color={'#4775f2'}
            onPress={() => {}}
          />
        </TitleBar>
        <ScrollView
          style={{flex: 1}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}>
            {
              RESTAURANT_DATA.slice(0, 5).map(restaurant => <OfferCard
                key={restaurant.id}
                image={require('../assets/images/items/cuisine-4.jpg')}
                heading={"Enjoy 50% off"}
                subheading={`from ${restaurant.name}`}
                onPress={() => onPress({restaurant})}
              />)
            }
        </ScrollView>
        <EmphasisView bgColor={'white'} heading={'919 RESTAURANTS'}>
          <ScrollView
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}>
            {
              RESTAURANT_DATA.slice(0, 10).map((restaurant, index) =>

              <View key={restaurant.id}><RestaurantCard
                key={restaurant.id}
                image={require('../assets/images/items/cuisine-1.jpg')}
                name={restaurant.name}
                dealsIn={restaurant.dealsIn.join(',')}
                deliversIn={'40 mins'}
                rating={2.4}
                offer={'40% off with coupon GYZA40'}
                costs={'400 per person'}
                onPress={() => onPress({restaurant})}
              />
              {
                index === insertEmphasisAt &&
                <EmphasisView bgColor={'whitesmoke'}
                heading={'in the spotlight'}
                subheading={'discover new tastes around you'}
                icon={'ios-star-outline'}
                center={true}
              >
                  <ScrollView
                    style={{flex: 1}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainer}>
                      {
                        RESTAURANT_DATA.slice(0, 6).map((restaurant, index) =>
                        <BrandCard
                        key={restaurant.id}
                        image={require('../assets/images/items/cuisine-6.jpg')}
                        heading={restaurant.name}
                        subheading={'30 mins'}
                        onPress={() => onPress({restaurant})}
                        />
                        )
                      }
                  </ScrollView>
              </EmphasisView>
              }
              </View>)
            }
        </ScrollView>
        </EmphasisView>
      </ScrollView>
    </Screen>
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
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 20
  }
});