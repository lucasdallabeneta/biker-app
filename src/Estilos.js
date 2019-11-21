/* eslint-disable prettier/prettier */
import { 
  Platform, 
  StyleSheet, 
  Dimensions 
} from 'react-native';

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around', // vertical
    alignItems: 'center', // horizontal
  },
  LoginCaixaInput: {
    height: 40,
    width: 300,
    backgroundColor: '#fff',
    //alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 100,
    //marginHorizontal: 0,
    padding: 10,
    paddingHorizontal: 25,
    marginVertical: 5,
  },
  LoginBotao: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 140,
    alignSelf: 'stretch',
    backgroundColor: '#f99',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 100,
    marginTop: 0,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    //marginHorizontal: 100,
  },
  PerfilBotaoTexto: {
    alignSelf: 'stretch',
    //backgroundColor: '#fff',
    paddingHorizontal: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  PerfilBotao: {
    backgroundColor: '#f99',
    justifyContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    //width: 200,
    alignSelf: 'stretch',
    borderRadius: 50,
    //marginTop: 10,
    marginHorizontal: 50,
    //paddingHorizontal: 10,
    //marginHorizontal: 100,
    fontWeight: 'bold',
  },
  LoginBotaoTexto: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    //fontStyle: 'italic'
  },
  PerfilContainerCreditos: {
    margin: 5, 
    height: 120, 
    borderColor: 'black', 
    //borderWidth: 2, 
    borderRadius: 100,
    backgroundColor: '#f99',
    flexDirection: 'row'
  },
  PerfilContainerInfo: {
    margin: 5, 
    height: 120, 
    borderColor: 'black', 
    //borderWidth: 2, 
    backgroundColor: '#f99', 
    borderRadius: 100,
    flexDirection: 'row'
  },
  AtividadesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    //justifyContent: 'flex-end',
    //alignItems: 'center',
  },
  AtividadesMap: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
  },

});

export default styles;
