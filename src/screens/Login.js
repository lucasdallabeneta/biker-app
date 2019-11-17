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
import { CheckBox, Image, Icon } from 'react-native-elements';
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
      if (value == 'sim') {
        this.props.navigation.navigate('TelaMain', { nomeTeste : 'lucas'});
      }
    } catch (error) {
      Alert.alert('no data bruh')
    }
  };

  handleLogin = async () => {
    if (this.state.cpf.length === 0 || this.state.password.length === 0) {
      Alert.alert('CPF ou senha incompletos','Insira seus dados corretamente');
    } else {
      try {
        const response = await axios.post(`http://192.168.0.7:3333/users/signin`, {
          cpf: this.state.cpf,
          password: this.state.password,
        });
        //Alert.alert('Resposta do servidor:',`cpf=${response.data.cpf} name=${response.data.name} token=${response.data.token}`);
        const { cpf, name, token } = response.data; 
        axios.defaults.headers.common['Authorization'] = `bearer ${token}`;
          
        await AsyncStorage.multiSet([
          ['@auth:token', token],
          ['@auth:name', name],
          ['@auth:cpf', cpf],
        ]);

        if( this.state.lembrarSenha == true ) {
          await AsyncStorage.setItem('@auth:lembrarSenha', 'sim'); 
        }

        this.props.navigation.navigate('TelaMain');

      } catch (err) {
        Alert.alert('[log]',''+err);
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
            placeholder="CPF"
            placeholderTextColor="#aaa"
            style={Estilos.caixaInput}
            //value={this.value.cpf}
            onChangeText={cpf => this.setState({ cpf })}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
						placeholder="Senha"
            placeholderTextColor="#aaa"
            onChangeText={password => this.setState({ password })}
            style={Estilos.caixaInput}
          />
          <CheckBox
            containerStyle={[Estilos.botao, {alignSelf: 'flex-end'}]}
            title={<Text style={Estilos.botaoTexto}>Lembrar a senha</Text>}
            iconRight
            center
            checkedIcon={<Icon name="add" type='material' color="#0f0" />}
            uncheckedIcon={<Icon name="add" type='material' color="#f00" />}
            checked={this.state.lembrarSenha}
            onPress={() => this.setState({lembrarSenha: !this.state.lembrarSenha})}
          />
        </View>

        <View style={{ flexDirection:'row' }}>
          <TouchableOpacity style={Estilos.botao} onPress={ ()=>{ this.props.navigation.navigate('TelaRecuperarSenha'); } }>
            <Text style={Estilos.botaoTexto}>Esqueci a senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Estilos.botao} onPress={ ()=>{ this.handleLogin(); } }>
            <Text style={Estilos.botaoTexto}>Login</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}
