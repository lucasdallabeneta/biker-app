/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { Image, ListItem } from 'react-native-elements';
import Estilos from '../Estilos';

export default class Main extends Component {
  // static navigationOptions = {
  //   title: 'Parceiros',
  // };
  constructor() {
    super();
    this.state = {
      logosParceiros: [],
    };
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

  // requestParceiros = () => {
  //   const url = `https://jsonplaceholder.typicode.com/photos`;
  //   return fetch(url)
  //     .then( (res) => res.json() )
  //       .then( (resJson) => {
  //         this.setState({
  //           logosParceiros: resJson,
  //         });
  //         console.log('logosparceiros=',this.state.logosParceiros)
  //         console.log('logosparceiros1=',this.state.logosParceiros[1])
  //       }).catch((error) => { console.log(error); });
  // }

  requestParceiros = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      this.setState({
        logosParceiros: responseJson,
      });
      console.log('logosparceiros=', this.state.logosParceiros);
    }
    catch (error) {
      console.log(error);
    }
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
        <Text>Lista:</Text>
        <FlatList
          data={this.state.logosParceiros}
          keyExtractor={(parceiro, index) => index.toString()}
          renderItem={({parceiro}) => {
            <Image
            source={{ uri: parceiro.thumbnailUrl }}
            style={{ width: 200, height: 200 }}
            PlaceholderContent={<ActivityIndicator/>}
          />
          }}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}
