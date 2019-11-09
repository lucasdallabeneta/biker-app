/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Estilos from '../Estilos';

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
