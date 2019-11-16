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
      checked: false,
    };
  }

  handleLogin = async () => {
    if (this.state.cpf.length === 0 || this.state.password.length === 0) {
      Alert.alert('senha ou login incompletos','tente novamente');
    } else {
      try {
        const response = await axios.post(`http://192.168.0.7:3333/users/signin`, {
          cpf: this.state.cpf,
          password: this.state.password,
        });
        Alert.alert('resposta do servidor:',`
          cpf=${response.data.cpf}
          name=${response.data.name}
          token=${response.data.token}
        `);
         
        axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`
          
        // const { cpf, token } = response.data;
        // Alert(''+cpf,''+token)
        //await AsyncStorage.setItem('@BikerApp:token', token);
        // await AsyncStorage.multiSet([
        //   ['@auth:token', token],
        //   ['@auth:user', JSON.stringify(user)]
        // ]);

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
            checkedIcon="add"
            uncheckedIcon="add"
            checkedColor="gray"
            uncheckedColor="gray"
            checked={this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked})}
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
