/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import MapView from 'react-native-maps';
import Estilos from '../Estilos';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Atividades',
  };

  render() {
    return (
      <View style={Estilos.AtividadesContainer}>
        <View style={{position: "absolute"}}>
          <Text style={{fontWeight: 'bold', fontSize: 30, alignSelf: 'center', paddingTop: 15}}>2.7</Text>
        </View>
        
        <MapView
          style={Estilos.AtividadesMap}
          initialRegion={{
            latitude: -26.299041,
            longitude: -48.846908,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={{position: "absolute", bottom: 25, height: 75, width: 75, backgroundColor: '#f92', borderRadius: 255, alignSelf: 'center'}}>
          <TouchableOpacity style={{ flex: 1}} onPress={() => Alert.alert('voce pausou a atividade')}>
            <Text style={{fontWeight: 'bold', fontSize: 30, alignSelf: 'center', paddingTop: 15}}> || </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
