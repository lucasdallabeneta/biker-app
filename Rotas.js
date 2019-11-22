/* eslint-disable prettier/prettier */
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Platform from 'react-native';

import Login from './src/screens/Login';
import RecuperarSenha from './src/screens/RecuperarSenha';

import Parceiros from './src/screens/Parceiros';
import Parceiro from './src/screens/Parceiro';

import Atividades from './src/screens/Atividades';
import Atividade from './src/screens/Atividade';

import Profile from './src/screens/Profile';
import Sobre from './src/screens/Sobre';
import Feedback from './src/screens/Feedback';
import Ajuda from './src/screens/Ajuda';
import AppConfig from './src/screens/AppConfig';
import EditProfile from './src/screens/EditProfile';
import MeusCuponsDescontos from './src/screens/MeusCuponsDescontos';


const AtividadesNavigator = createStackNavigator({
  TelaMain : { 
    screen : Atividades,
    navigationOptions: {
      header: null,
    }
  },
  TelaAtividade : { 
    screen : Atividade,
  }
});

// unico jeito que consegui fazer o tab bar ficar invisivel...
AtividadesNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {tabBarVisible = false}
  return {tabBarVisible};
};

const ParceirosNavigator = createStackNavigator({
  TelaMain : { 
    screen : Parceiros,
    navigationOptions: {
      header: null,
    } 
  },
  TelaParceiro : { screen : Parceiro },
});

const ProfileNavigator = createStackNavigator({
  TelaMain : { 
    screen : Profile,
    navigationOptions: {
      header: null,
    }
  },
  TelaSobre : { screen : Sobre },
  TelaAjuda : { screen : Ajuda },
  TelaFeedback : { screen : Feedback},
  TelaAppConfig : { screen : AppConfig},
  TelaEditProfile : { screen : EditProfile},
  TelaMeusCuponsDescontos : { screen : MeusCuponsDescontos},
});

const MyTabNavigator = createBottomTabNavigator({
  Perfil : ProfileNavigator,
  Parceiros : ParceirosNavigator,
  Atividades : AtividadesNavigator,
},{
  headerMode: 'none',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#f99',
    inactiveTintColor: '#b5b5b5',
    showIcon: 'true',
    //showLabel: (Platform.OS !== 'android'), 
    labelStyle: {
      fontSize: 10,
    },
    style: {
      backgroundColor: '#fff',
      paddingBottom: 5,
      //height: 40
    }
  }
});

const MySwitchNavigator = createSwitchNavigator({
    TelaLogin: { screen : Login },
    TelaMain : MyTabNavigator,
    TelaRecuperarSenha: RecuperarSenha,
  },{
    initialRouteName: 'TelaLogin',
});

export default createAppContainer(MySwitchNavigator);

