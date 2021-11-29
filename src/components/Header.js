import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>

        <TouchableOpacity 
          style={styles.valueContainer} 
          onPress={() => alert('Value')}
        >
          <Image
            source={require('Lottolads/images/coin.png')}
            style={styles.coin}
            resizeMode="contain"
          />
          <Text style={styles.valueText}>$50.00</Text>
          <Image
            source={require('Lottolads/images/down-arrow.png')}
            style={styles.arrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: windowHeight * 0.1,
    borderBottomWidth: 1,
    borderBottomColor: '#c2c2c1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 8,    
    borderWidth: 1,
    borderColor: '#c2c2c1',
    borderRadius: 5,
  },
  coin: {
    width: 20,
    height: 20,
  },
  valueText: {
    marginHorizontal: 5,
    fontSize: 14,
  },
  arrow: {
    marginLeft: 5,
    width: 15,
    height: 15,
  }
})