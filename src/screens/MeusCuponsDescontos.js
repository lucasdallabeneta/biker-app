/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Meus Cupons e Descontos',
  };

  render() {
    return (
      <View style={{ flex:1 }}>
        <Text>
          tela para exibir os cupons e descontos
        </Text>
      </View>
    );
  }
}
