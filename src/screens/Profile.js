/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Image,
  Alert,
  StatusBar,
} from 'react-native';
import Estilos from '../Estilos';
import api from '../api/api';
import axios from 'axios';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditos: 0,
      cpf: 222,
    };
  }

  componentDidMount() {

    AsyncStorage.getItem('@auth:name').then((name) => {
      this.setState({
        name: name
      });
    });

    AsyncStorage.getItem('@auth:cpf').then((cpf) => {
      this.setState({
        cpf: cpf
      });
    });

    this.handleCreditos()

  }

  handleCreditos = async () => {
      try {
        const response = await api.post('/users/creditos', {
          cpf: this.state.cpf,
        });
        //Alert.alert('Resposta do servidor:',`cpf=${response.data.cpf} name=${response.data.name} token=${response.data.token}`);
        const { creditos } = response.data; 

        //axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
        //Alert.alert("creditos:",response.data)
          
        // await AsyncStorage.multiSet([
        //   ['@auth:creditos', creditos]
        // ]);

      } catch (err) {
        Alert.alert('[logs]',''+err);
      }
  };

  render() {
    return (
      <View style={{ flex:1, margin: 5 }}>
         <StatusBar barStyle="dark-content" backgroundColor='#fff'/> 

        <View style={Estilos.PerfilContainerInfo}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
            <Image 
              source={require('../imgs/taco.png')}
              style={{ resizeMode: 'contain', marginLeft: 20 }}
            />
          </View>
          <View style={{flex: 2, justifyContent: 'center'}}> 
            <Text testID="name" style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>  bem vindo {this.state.name} </Text>
            <Text style={{ fontSize: 20, color: '#FFF' }}>  CPF: {this.state.cpf} </Text>
            <Text style={{ fontSize: 20, color: '#FFF' }}>  Criador do BikerApp </Text>
          </View>
        </View>

        <View style={Estilos.PerfilContainerCreditos}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
            <Text style={{ fontSize: 20, color: '#FFF' }}>  creditos diponiveis: {this.state.creditos} </Text>
          </View>
        </View>

        <View style={{ flex: 1, margin: 5, alignItems: 'center', justifyContent: 'space-between' }}>
          
          <TouchableOpacity 
            style={Estilos.PerfilBotao}
            onPress={() => this.props.navigation.navigate('TelaMeusCuponsDescontos')}
            >
            <Text style={Estilos.PerfilBotaoTexto}>Meus cupons e descontos</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={Estilos.PerfilBotao}
            onPress={() => this.props.navigation.navigate('TelaEditProfile')}
            >
            <Text style={Estilos.PerfilBotaoTexto}>Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={Estilos.PerfilBotao}
            onPress={() => this.props.navigation.navigate('TelaAppConfig')}
            >
            <Text style={Estilos.PerfilBotaoTexto}>Configurações do Aplicativo</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={Estilos.PerfilBotao}
            onPress={() => this.props.navigation.navigate('TelaAjuda')}
            >
            <Text style={Estilos.PerfilBotaoTexto}>Ajuda</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={Estilos.PerfilBotao}
            onPress={() => this.props.navigation.navigate('TelaFeedback')}
            >
            <Text style={Estilos.PerfilBotaoTexto}>Feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={Estilos.PerfilBotao}
            onPress={() => this.props.navigation.navigate('TelaSobre')}
            >
            <Text style={Estilos.PerfilBotaoTexto}>Sobre</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={Estilos.PerfilBotao} 
            onPress={ () => {
              Alert.alert('Atenção', 'Tem certeza que deseja sair da conta?', [
                {text: 'Sim', onPress: () => { 
                  AsyncStorage.clear();
                  this.props.navigation.navigate('TelaLogin');
                }},{
                  text: 'Não'
                }
              ])
              
            }}>
            <Text style={Estilos.PerfilBotaoTexto}>Sair</Text>
          </TouchableOpacity>

        </View>
 
      </View>
    );
  }
}
