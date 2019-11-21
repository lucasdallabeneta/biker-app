/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Editar Perfil',
  };

  render() {
    return (
      <View style={{ flex:1 }}>
        <Text>
          tela para editar o perfil
        </Text>
      </View>
    );
  }
}
