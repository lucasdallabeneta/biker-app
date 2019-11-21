/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Feedback',
  };

  render() {
    return (
      <View style={{ flex:1 }}>
        <Text>
          tela de feedback
        </Text>
      </View>
    );
  }
}
