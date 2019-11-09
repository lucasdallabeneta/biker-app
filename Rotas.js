/* eslint-disable prettier/prettier */
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import RecuperarSenha from './src/screens/RecuperarSenha';
import Parceiros from './src/screens/Parceiros';
import Atividades from './src/screens/Atividades';
import Parceiro from './src/screens/Parceiro';


const AtividadesNavigator = createStackNavigator({
  TelaMain : {
    screen : Atividades,
    navigationOptions: {
      headerTitle: 'Tela de atividades',
  }},
});

const ParceirosNavigator = createStackNavigator({
  TelaMain : {
    screen : Parceiros,
    navigationOptions: {
      headerTitle: 'Tela de parceiros',
  }},
  TelaParceiro : {
    screen : Parceiro,
    navigationOptions: {
      //headerTitle: 'Tela de parceiro',
  }},
});

const ProfileNavigator = createStackNavigator({
  TelaMain : {
    screen : Profile,
    navigationOptions: {
      headerTitle: 'Tela de perfil',
  }}
});

const MyTabNavigator = createBottomTabNavigator({
  Perfil : ProfileNavigator,
  Parceiros : ParceirosNavigator,
  Atividades : AtividadesNavigator,
});

const MySwitchNavigator = createSwitchNavigator({
    TelaLogin: { screen : Login }, // da pra escrever assim e no metodo abaixo tambem
    TelaMain : MyTabNavigator,
    TelaRecuperarSenha: RecuperarSenha,
  },{
    initialRouteName: 'TelaLogin',
});

export default createAppContainer(MySwitchNavigator);

// era pra ser igual o de cima
// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       TelaLogin: Login,
//       TelaMain: MainStack,
//       TelaAgenda: Agenda,
//     },{
//       initialRouteName: 'TelaLogin',
//     }
//   ),
// );

