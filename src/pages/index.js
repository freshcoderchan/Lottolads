import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text
} from 'react-native';

import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LotteriesPage from './Lotteries';
import KenoPage from './Keno/Keno';
import AdpotPage from './Adpot/Adpot';
import AffiliatePage from './Affiliate/Affiliate';
import InfoPage from './Info/Info';

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  tabBarIconFocused: {
    tintColor: "#643FF1",
  },
});


const AppTabContainer = createBottomTabNavigator({
  Lotteries: {
    screen: LotteriesPage,
  },
  Keno: {
    screen: KenoPage,
  },
  Adpot: {
    screen: AdpotPage,
  },
  Affiliate: {
    screen: AffiliatePage,
  },
  Info: {
    screen: InfoPage,
  },
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let tabIcon;
        switch (routeName) {
          case 'Lotteries':
            tabIcon = require("Lottolads/images/lotteries.png");
            break;
          case 'Keno':
            tabIcon = require("Lottolads/images/keno.png");
            break;
          case 'Adpot':
            tabIcon = require("Lottolads/images/adpot.png");
            break;
          case 'Affiliate':
            tabIcon = require("Lottolads/images/affiliate.png");
            break;
          case 'Info':
            tabIcon = require("Lottolads/images/info.png");
            break;
          default:
            break;
        }
        return (
          <View style={styles.tabIconContainer}>
            <Image
              resizeMode="contain"
              source={tabIcon}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
          </View>
        );
      },
    }),
    tabBarOptions: {
      style: {
        height: 60,
        paddingBottom: 10,
      },
      activeTintColor: "#643FF1",
    },
  },
);

export default createAppContainer(AppTabContainer);