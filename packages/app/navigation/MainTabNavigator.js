import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { HomeScreen } from '../screens/HomeScreen';
import { RestaurantScreen } from '../screens/RestaurantScreen';

import TabBarIcon from '../components/TabBarIcon';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {
    headerMode: 'none'
  },
});

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Info: RestaurantScreen
  },config);

HomeStack.navigationOptions = {
  tabBarLabel: 'HOME',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios' ? 'ios-home' : 'md-home' }
    />
  ),
};
HomeStack.path = '';

const SearchStack = createStackNavigator({
    Search: HomeScreen,
  },config);

SearchStack.navigationOptions = {
  tabBarLabel: 'SEARCH',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};

SearchStack.path = '';

const CartStack = createStackNavigator({
    Cart: HomeScreen,
  }, config);

CartStack.navigationOptions = {
  tabBarLabel: 'CART',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
    />
  ),
};
CartStack.path = '';

const SettingsStack = createStackNavigator({
    Profile: HomeScreen,
    Settings: HomeScreen,
  }, config);

SettingsStack.navigationOptions = {
  tabBarLabel: 'ACCOUNT',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};
SettingsStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  CartStack,
  SettingsStack
}, {
  navigationOptions: {
    headerMode: false
  }
});

tabNavigator.path = '';

export default tabNavigator;
