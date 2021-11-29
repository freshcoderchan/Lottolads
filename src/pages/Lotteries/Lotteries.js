import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default class LotteriesTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>fw</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FF',
  }, 
})