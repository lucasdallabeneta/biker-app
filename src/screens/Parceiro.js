/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Main extends Component {
  // static navigationOptions = {
  //   title: 'Parceiro',
  // };

  static navigationOptions = props => {
    const { navigation } = props;
    return {
      headerTitle: `Usuário: ${navigation.getParam('nomeTeste', 'ERROR')}`,
      //headerRight: (<Button title='Purple' onPress={() => navigation.navigate('TelaAgenda')}/>)
    };
  };

  render() {
    return (
      <View style={{ flex:1 }}>
        <Text>
          TELA PARCEIROS
        </Text>
      </View>
    );
  }
}
