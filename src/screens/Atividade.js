/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Estilos from '../Estilos';
import geolocation from '@react-native-community/geolocation';

export default class Main extends Component {

  static navigationOptions = ({ navigation }) => {
    let numAtividade = 1
    return {
      title: `atividade ${numAtividade}`,
      // fazer um botao em um componente novo:
      headerRight: (
        <View style={{height:20, width: 20, margin: 10 , backgroundColor: '#f99', borderRadius: 100}}/>
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      isLoading: false,
    }
  }

  componentDidMount() {
    this.findCoordinates()
  }

  findCoordinates = () => {
		geolocation.getCurrentPosition(
			position => {
        this.setState({ 
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          isLoading: true 
        });
			},
		  error => Alert.alert(error.message),
			{ enableHighAccuracy: false, timeout: 50000 }
		);
  };
  
  // componentWillUnmount = () => {
  //   geolocation.clearWatch(this.watchID);
  // }

  render() {
    const isLoading = this.state.isLoading;
    return (
      <View style={Estilos.AtividadesContainer}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 15 }}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 30, alignSelf: 'center'}}>0</Text>
            <Text style={{fontWeight: 'bold', fontSize: 12, alignSelf: 'center'}}>distancia(km)</Text>
          </View>
          <View>
          <Text style={{fontWeight: 'bold', fontSize: 30, alignSelf: 'center'}}>00:00</Text>
            <Text style={{fontWeight: 'bold', fontSize: 12, alignSelf: 'center'}}>tempo (minutos)</Text>
          </View>
          <View>
          <Text style={{fontWeight: 'bold', fontSize: 30, alignSelf: 'center'}}>0</Text>
            <Text style={{fontWeight: 'bold', fontSize: 12, alignSelf: 'center'}}>calorias (kcal)</Text>
          </View>
        </View>

        {
        isLoading ?
          <MapView
            style={Estilos.AtividadesMap}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={this.state}/>
          </MapView>
        : 
          <Text>carregando sua localização</Text>
        }

        <View style={{position: "absolute", bottom: 25, height: 75, width: 75, backgroundColor: '#f99', borderRadius: 255, alignSelf: 'center'}}>
          <TouchableOpacity style={{ flex: 1}} onPress={() => Alert.alert('voce pausou a atividade')}>
            <Text style={{fontWeight: 'bold', fontSize: 30, paddingTop: 15, alignSelf: 'center'}}> || </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
