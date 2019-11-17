/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import { CheckBox, Image } from 'react-native-elements';
import Estilos from '../Estilos';
import logo from '../imgs/logo.jpeg';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cpf: '',
      password: '',
      lembrarSenha: false,
    };
  }

  componentDidMount() {
    this._retrieveData()
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@auth:lembrarSenha');
      if (value == 'true') {
        this.props.navigation.navigate('TelaMain', { nomeTeste : 'lucas'});
      }
    } catch (error) {
      Alert.alert('no data bruh')
    }
  };

  handleLogin = async () => {
    if (this.state.cpf.length === 0 || this.state.password.length === 0) {
      Alert.alert('senha ou login incompletos','tente novamente');
    } else {
      try {
        const response = await axios.post(`http://192.168.0.7:3333/users/signin`, {
          cpf: this.state.cpf,
          password: this.state.password,
        });
       
        Alert.alert('resposta do servidor:',`cpf=${response.data.cpf} name=${response.data.name} token=${response.data.token}`);
        
        const { cpf, name, token } = response.data; 

        axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
          
        await AsyncStorage.multiSet([
          ['@auth:token', token],
          ['@auth:name', name],
          ['@auth:cpf', cpf],
        ]);

        if( this.state.lembrarSenha == true ) {
          await AsyncStorage.setItem('@auth:lembrarSenha', 'true'); 
        }

        this.props.navigation.navigate('TelaMain', { nomeTeste : 'lucas'});

      } catch (_err) {
        Alert.alert('erro mane',''+_err);
        //this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
      }
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={Estilos.containerLogin}
      >
        <StatusBar barStyle="light-content"/>

        <View style={{ flexDirection:'row'}}>
          <Image
            source={ logo }
            style={{ width: 300, height: 100, resizeMode: 'contain', }}
            PlaceholderContent={<ActivityIndicator/>}
          />
        </View>

        <View style={{ flexDirection:'column'}}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="cpf"
            placeholderTextColor="#000"
            style={Estilos.caixaInput}
            //value={this.value.cpf}
            onChangeText={cpf => this.setState({ cpf })}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="senha"
            placeholderTextColor="#000"
            onChangeText={password => this.setState({ password })}
            style={Estilos.caixaInput}
          />
          <CheckBox
            containerStyle={{ width: 160, alignSelf: 'flex-end'}}
            title="lembrar senha"
            iconRight
            center
            iconType="material"
            checkedIcon="clear"
            uncheckedIcon="clear"
            checkedColor="green"
            uncheckedColor="red"
            checked={this.state.lembrarSenha}
            onPress={() => this.setState({lembrarSenha: !this.state.lembrarSenha})}
          />
        </View>

        <View style={{ flexDirection:'row' }}>
          <TouchableOpacity style={Estilos.botao} onPress={ ()=>{ this.props.navigation.navigate('TelaRecuperarSenha'); } }>
            <Text style={Estilos.botaoTexto}>esqueci a senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Estilos.botao} onPress={ ()=>{ this.handleLogin(); } }>
            <Text style={Estilos.botaoTexto}>login</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}
