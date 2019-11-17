/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Image,
} from 'react-native';
import Estilos from '../Estilos';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('@auth:name').then((name) => {
      this.setState({
        nome: name
      });
    });
  }

  render() {
    return (
      <View style={{ flex:1, margin: 5, backgroundColor: '#f72'}}>

        <View style={{ margin: 5, height: 120, borderColor: 'black', borderWidth: 2, backgroundColor: '#fff', flexDirection: 'row'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
            <Image 
              source={require('../imgs/horse.png')}
              style={{ resizeMode: 'contain', }}
            />
          </View>
          <View style={{flex: 2, justifyContent: 'center'}}> 
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>  bem vindo {this.state.nome} </Text>
            <Text style={{ fontSize: 20 }}>  funcionario da bikerapp </Text>
          </View>
        </View>

        <View style={{  margin: 5, height: 120, borderColor: 'black', borderWidth: 2, backgroundColor: '#fff',flexDirection: 'row'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
            <Text style={{ fontSize: 20 }}>  creditos diponiveis: 1203 </Text>
          </View>
        </View>

        <View style={{ flex: 1, margin: 5, alignItems: 'center', justifyContent: 'space-between' }}>
          
          <TouchableOpacity style={Estilos.PerfilBotao}>
            <Text style={Estilos.PerfilBotaoTexto}>Meus cupons e descontos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Estilos.PerfilBotao}>
            <Text style={Estilos.PerfilBotaoTexto}>Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Estilos.PerfilBotao}>
            <Text style={Estilos.PerfilBotaoTexto}>Configurações do Aplicativo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Estilos.PerfilBotao}>
            <Text style={Estilos.PerfilBotaoTexto}>Ajuda</Text>
          </TouchableOpacity>

           <TouchableOpacity style={Estilos.PerfilBotao}>
            <Text style={Estilos.PerfilBotaoTexto}>Feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Estilos.PerfilBotao}>
            <Text style={Estilos.PerfilBotaoTexto}>Sobre</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Estilos.PerfilBotao} onPress={ () => AsyncStorage.clear() }>
            <Text style={Estilos.PerfilBotaoTexto}>Sair</Text>
          </TouchableOpacity>

        </View>

 
      </View>
    );
  }
}
