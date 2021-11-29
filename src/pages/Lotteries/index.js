import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  Tab,
  Tabs,
} from 'native-base';

import Header from '../../components/Header';
import LotteriesTab from './Lotteries';

export default class LotteriesPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title='Lotteries' />
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "#643FF1" }}>
          <Tab
            heading='Lotteries'
            tabStyle={styles.tabHeading}
            activeTabStyle={styles.tabHeading}            
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTabTextStyle}
          >
            <LotteriesTab />
          </Tab>
          <Tab
            heading='My Tickets'
            tabStyle={styles.tabHeading}
            activeTabStyle={styles.tabHeading}
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTabTextStyle}
          >
            <Text>My Tickets</Text>
          </Tab>
          <Tab
            heading='Results'
            tabStyle={styles.tabHeading}
            activeTabStyle={styles.tabHeading}
            textStyle={styles.tabTextStyle}
            activeTextStyle={styles.activeTabTextStyle}
          >
            <Text>Results</Text>
          </Tab>
        </Tabs>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tabHeading: {
    backgroundColor: '#ffffff',
  },
  tabTextStyle: {
    color: '#928EA1',
    fontSize: 16,
  },
  activeTabTextStyle: {
    color: '#1A0D49',
    fontSize: 16,
  }
})