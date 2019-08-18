import * as WebBrowser from 'expo-web-browser';
import React, { ReactNode } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  ScrollView,
  Text,
  View
} from 'react-native';

import {
          Screen,
          Heading,
         Subheading,
         TitleBar,
         IRestaurant,
         RESTAURANT_MENU_ITEM_DATA
          } from '@gyza/common';



export const RestaurantScreen = ({ navigation }) => {
  const restaurant: IRestaurant = navigation.getParam('restaurant', {});
  const goBack = () => navigation.goBack();
  return (
    <Screen>
        <ScrollView style={{height: '100%'}} showsVerticalScrollIndicator={false}>
          <TitleBar bgColor={restaurant.color}>
            <Icon
              name={'ios-arrow-dropleft'}
              size={26}
              style={{ position: 'absolute', top: 20, left: 20 }}
              color={'#fff'}
              onPress={goBack}
            />
            <Heading >Restaurant:  { restaurant.name }</Heading>
            <Subheading>What are you havins' today?</Subheading>
          </TitleBar>
          <Text>{restaurant.dealsIn}</Text>
          <View style={{flex: 1}}>
            {
              RESTAURANT_MENU_ITEM_DATA.slice(0, 20).map(item =>
                <View style={{flex: 1, paddingTop: 20, paddingHorizontal: 20}} key={item.id}>
                  <Text style={{fontWeight: '600'}}>{item.name}</Text>
                  <Text>{item.description}</Text>
                  <Text>{item.available}</Text>
                  <Text>{item.category}</Text>
                  <Text>{item.cost}</Text>
                  <Text>{item.featured}</Text>
                  <Text>{item.type}</Text>
                </View>
              )
            }
          </View>
          </ScrollView>
    </Screen>
  );
}

// RestaurantInfoScreen.navigationOptions = {
//   header: null,
// };