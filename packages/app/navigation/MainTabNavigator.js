import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
// import { HomeScreen } from '@gyza/common';
import { HomeScreen } from '../screens/HomeScreen';

import TabBarIcon from '../components/TabBarIcon';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

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

const SearchStack = createStackNavigator(
  {
    Search: HomeScreen,
  },
  config
);

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

const CartStack = createStackNavigator(
  {
    Cart: HomeScreen,
  },
  config
);

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

const AccountStack = createStackNavigator(
  {
    Account: HomeScreen,
  },
  config
);

AccountStack.navigationOptions = {
  tabBarLabel: 'ACCOUNT',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

AccountStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  CartStack,
  AccountStack
});

tabNavigator.path = '';

export default tabNavigator;
