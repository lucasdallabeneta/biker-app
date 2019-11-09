/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Atividades',
  };

  render() {
    return (
      <View style={{ flex:1 }}>
        <Text>
          TELA ATIVIDADES
        </Text>
      </View>
    );
  }
}
