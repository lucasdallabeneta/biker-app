/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import Estilos from '../Estilos';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Atividades',
  };

  render() {
    return (
      <View style={Estilos.AtividadesContainer}>
         
         <View style={{ flexDirection:'row' }}>
          <TouchableOpacity style={Estilos.LoginBotao} onPress={ ()=>{ this.props.navigation.navigate('TelaAtividade'); } }>
            <Text style={Estilos.LoginBotaoTexto}>Comecar Atividade</Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
