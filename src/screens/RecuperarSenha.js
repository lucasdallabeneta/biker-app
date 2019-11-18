/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';
import Estilos from '../Estilos';
import axios from 'axios';

//const servidor = 'http://192.168.0.7:3333'
const servidor = 'http://192.168.0.7:3333'

export default class Main extends Component {
  // static navigationOptions = {
  //   title: 'Recuperar Senha',
  // };
  constructor(props) {
    super(props);

    this.state = {
      cpf: '',
      password: '',
      mostrarSenha: true,
      usuarioEncontrado: false,
    };
  }

  mudaSenha = async () => {
    if (this.state.password.length === 0){
      Alert.alert('erro!','Insira sua nova senha');
    } else {
      try {
        const response = await axios.post(`${servidor}/users/changepass`, {
          cpf: this.state.cpf,
          password: this.state.password,
        });

        if (response.status = 204) {
          Alert.alert("Sucesso","Sua senha foi atualizada!")
        }

        this.props.navigation.navigate('TelaLogin');

      } catch (err) {
        Alert.alert('[log]',''+err);
      }
    }
  };

  buscaUsuario = async () => {
    if (this.state.cpf.length === 0){
      Alert.alert('erro!','Insira seu CPF');
    } else {
      try {
        const response = await axios.post(`http://192.168.0.7:3333/users/checkuser`, {
          cpf: this.state.cpf,
        });

        if (response.status = 204) {
          Alert.alert("Usuario encontrado!","Agora voce pode definir uma nova senha")
          this.setState({
            usuarioEncontrado: !this.usuarioEncontrado,
          })
        }

      } catch (err) {
        Alert.alert('[log]',''+err);
      }
    }
  };

  render() {
    const encontrado = this.state.usuarioEncontrado;
    return (
      <View style={Estilos.containerLogin}>
        { encontrado ? 
          <View style={{ flexDirection:'column'}}>
            <Text>Digite seu nova senha: </Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Senha"
              placeholderTextColor="#aaa"
              style={Estilos.caixaInput}
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity style={Estilos.botao} onPress={ () => this.mudaSenha() }>
                <Text style={Estilos.botaoTexto}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Estilos.botao}>
                <Text style={Estilos.botaoTexto}>Mostrar senha</Text>
            </TouchableOpacity>
          </View>   
        :
          <View style={{ flexDirection:'column'}}>
            <Text>Digite seu CPF</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="CPF"
              placeholderTextColor="#aaa"
              style={Estilos.caixaInput}
              onChangeText={cpf => this.setState({ cpf })}
            />
            <TouchableOpacity style={Estilos.botao} onPress={ () => this.buscaUsuario() }>
                <Text style={Estilos.botaoTexto}>Enviar</Text>
            </TouchableOpacity>
          </View>   
      }   
    </View>
    );
  }
}
