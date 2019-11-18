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

const servidor = "http://192.168.43.111:3333";

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
        const response = await axios.post(`${servidor}/users/signin`, {
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
      style={Estilos.LoginContainer}
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
            style={Estilos.LoginCaixaInput}
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
            style={Estilos.LoginCaixaInput}
          />
          <CheckBox
            containerStyle={[Estilos.LoginBotao, {alignSelf: 'flex-end'}]}
            title={<Text style={Estilos.LoginBotaoTexto}>Lembrar a senha</Text>}
            iconRight
            center
            checkedIcon={<Icon name="add" type='material' color="#0f0" />}
            uncheckedIcon={<Icon name="add" type='material' color="#f00" />}
            checked={this.state.lembrarSenha}
            onPress={() => this.setState({lembrarSenha: !this.state.lembrarSenha})}
          />
        </View>

        <View style={{ flexDirection:'row' }}>
          <TouchableOpacity style={Estilos.LoginBotao} onPress={ ()=>{ this.props.navigation.navigate('TelaRecuperarSenha'); } }>
            <Text style={Estilos.LoginBotaoTexto}>Esqueci a senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Estilos.LoginBotao} onPress={ ()=>{ this.handleLogin(); } }>
            <Text style={Estilos.LoginBotaoTexto}>Login</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}
