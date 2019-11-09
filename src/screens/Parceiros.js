/* eslint-disable prettier/prettier */

//import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  //Image,
  Button,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Estilos from '../Estilos';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox, Image } from 'react-native-elements';
//import api from '../services/api';
import imagem from '../imgs/computer.png'

export default class Main extends Component {
  // static navigationOptions = {
  //   title: 'Parceiros',
  // };

  // static navigationOptions = ({ navigation }) => {
    // static navigationOptions = props => {
    //   const { navigation } = props;
    //   return {
    //     headerTitle: `Usuário: ${navigation.getParam('nomeTeste', 'ERROR')}`,
    //     //headerRight: (<Button title='Purple' onPress={() => navigation.navigate('TelaAgenda')}/>)
    //   };
    // };

  render() {
    return (
      <View style={{ flex:1 }}>
        <ScrollView>

          <View style={Estilos.blocoParceiro}>
            <Text style={Estilos.botaoTexto}>Novidades</Text>
            <ScrollView horizontal={true}>
              <View style={Estilos.blocoParceiro2}>
                <TouchableOpacity style={{ flex: 1}} onPress={ ()=>{ this.props.navigation.navigate('TelaParceiro', { nomeTeste : 'lucas'}); } }>
                  <Image
                    source={ imagem }
                    style={{ height: 100, width: 100 }}
                    PlaceholderContent={<ActivityIndicator/>}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

        </ScrollView>
      </View>
    );
  }
}
