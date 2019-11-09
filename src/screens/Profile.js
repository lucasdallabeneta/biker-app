/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Estilos from '../Estilos';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={{ flex:1 }}>
        <Text>teste</Text>
      </View>
    );
  }
}
