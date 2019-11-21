/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Sobre',
  };

  render() {
    return (
      <View style={{ flex:1 }}>
        <Text>
          sobre esse app: foi dificil fazer
        </Text>
      </View>
    );
  }
}
