/* eslint-disable prettier/prettier */

//import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Estilos from '../Estilos';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';
import imagem from '../imgs/computer.png'

export default class Main extends Component {
  // static navigationOptions = {
  //   title: 'Parceiros',
  // };

  state = {
    dadosParceiros: [],
    loading: false,
  }

  // static navigationOptions = ({ navigation }) => {
    // static navigationOptions = props => {
    //   const { navigation } = props;
    //   return {
    //     headerTitle: `Usuário: ${navigation.getParam('nomeTeste', 'ERROR')}`,
    //     //headerRight: (<Button title='Purple' onPress={() => navigation.navigate('TelaAgenda')}/>)
    //   };
    // };

  componentDidMount() {
    this.requestParceiros();
  }

  renderParceiro = ({ parceiro }) => {
    return (
      <View>
        <Image
          source={parceiro.picture}
          style={{ width: 200, height: 200 }}
          PlaceholderContent={<ActivityIndicator/>}
        />
      </View>
    )
  }

  requestParceiros = () => {
    const num_results = 20
    const url = `https://randomuser.me/api/?results=${num_results}`;
    return fetch(url)
      .then( (res) => res.json() )
        .then( (resJson) => {
          this.setState({
            dadosParceiros: resJson.results,
          });
          console.log(this.state.dadosParceiros)
        }).catch((error) => { console.log(error)});
  }

  renderSeparator = () => {
    return (
      <View style={{ height:1, width:'100%', backgroundColor: '#119'}}/>
    );
  }

  render() {
    return (
      <View style={{ flex:1 }}>
        {/* <ScrollView>

          <View style={Estilos.blocoParceiro}>
            <Text style={Estilos.blocoParceiroTitulo}>Novidades</Text>
            <ScrollView horizontal={true}>
              <View style={Estilos.blocoParceiro2}>
                <TouchableOpacity style={{ flex: 1 }} onPress={ ()=>{ this.props.navigation.navigate('TelaParceiro', { nomeParceiro : 'Decathlon'}); } }>
                  <Image
                    source={ imagem }
                    style={{ height: 100, width: 100 }}
                    PlaceholderContent={<ActivityIndicator/>}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

        </ScrollView> */}

        <FlatList
          data={this.state.dadosParceiros}
          renderItem={this.renderParceiro}
          keyExtractor={(parceiro, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}
