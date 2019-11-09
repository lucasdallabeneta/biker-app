/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
//import AsyncStorage from '@react-native-community/async-storage';

import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
//import api from '../services/api';
import Estilos from '../Estilos';
// import imagem1 from '../imgs/computer.png';
// import imagem2 from '../imgs/emoji.png';
// import imagem3 from '../imgs/family.png';
// import imagem4 from '../imgs/horse.png';
// import imagem5 from '../imgs/people.png';
// import imagem6 from '../imgs/taco.png';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parametros:  this.props.navigation.getParam('nomeTeste', 'erro'),
    };
  }

  // static navigationOptions = {
  //   title: 'Parceiros',
  // };

  // componentDidMount() {
  //   console.log("NAV: ", this.props.navigation.getParam('nome'));
  // }

  // static navigationOptions = ({ navigation }) => {
  // static navigationOptions = props => {
  //   const { navigation } = props;
  //   return {
  //     //headerTitle: `Usuário: ${navigation.getParam('nomeTeste', 'ERROR')}`,
  //     //headerRight: (<Button title='Purple' onPress={() => navigation.navigate('TelaAgenda')}/>)
  //   };
  // };

  render() {
    return (
      <View style={{ flex:1 }}>
        <View style={[Estilos.containerMain,{ flex : 1 }]}/>
          <View style={[Estilos.containerMain,{ flex : 5 , flexDirection: 'column' }]}>
            <Text>
              teste
            </Text>
          </View>
        <View style={[Estilos.containerMain,{ flex : 1 }]} />
      </View>
    );
  }
}
