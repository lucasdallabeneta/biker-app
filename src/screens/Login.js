/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {
  View,
  //SafeAreaView,
  Text,
  //Image,
  //Button,
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
//import api from '../services/api';
//import AsyncStorage from '@react-native-community/async-storage';
import logo from '../imgs/logo.png';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cpf: '',
      password: '',
      checked: false,
    };
  }

  // lembrar como faz toggle:
  // toggleContacts = () => {
  //   this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  // };


  checkLogin = () => {
    const { cpf, password } = this.state;

    if (cpf === '' && password === '') {
      this.props.navigation.navigate('TelaMain', { nomeTeste : 'lucas'});
    } else {
      // criar um alerta dizendo que a senha ou usuario esta incorreto
      Alert.alert('senha ou login incorreto','tente novamente');
    }
  }

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
            style={{ width: 200, height: 200 }}
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

          <TouchableOpacity style={Estilos.botao} onPress={ ()=>{ this.checkLogin(); } }>
            <Text style={Estilos.botaoTexto}>login</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    );
  }
}
