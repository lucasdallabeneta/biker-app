/* eslint-disable prettier/prettier */

import { Platform, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#bcf',
    justifyContent: 'space-around', // vertical
    alignItems: 'center', // horizontal
  },

  containerMain: {
    flex: 1,
    margin: 5,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between', // vertical
    alignItems: 'center',
  },

  blocoParceiro:{
    height:200,
    width: Dimensions.get('window').width,
    backgroundColor: '#999',
    padding: 10,
    marginVertical: 20,
  },

  blocoParceiro2:{
    height: 120,
    width: 125,
    backgroundColor: '#ddd',
    padding: 10,
    margin: 10,
  },

  //bloco que contem os icones
  blocoMain: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
  },

  iconeBloco: {
    height: 75,
    width: 75,
    borderWidth: 1,
    borderColor: 'black',
  },

  textoBloco: {
    alignItems: 'center',
    fontWeight: 'bold',
  },

  card: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 50,
    marginVertical: 100,
    borderRadius: 25,
    borderColor: '#eee',
    borderWidth: 1,
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  informacoes: {
    backgroundColor: '#fff',
    padding: 10,
    overflow: 'hidden',
  },

  // tela de perfil
  caixaInput: {
    height: 40,
    width: 300,
    backgroundColor: '#fff',
    //alignSelf: 'stretch',
    // borderWidth: 4,
    // borderColor: '#aaf',
    //borderRadius: 5,
    //marginHorizontal: 0,
    padding: 10,
    marginVertical: 5,
  },

  // to usando
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 140,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 0,
    marginTop: 0,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    //marginHorizontal: 100,
  },
  // to usando
  PerfilBotaoTexto: {
    alignSelf: 'stretch',
    //backgroundColor: '#fff',
    paddingHorizontal: 30,
    fontWeight: 'bold',
  },
  // to usando
  PerfilBotao: {
    justifyContent: 'center',
    //alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    //width: 200,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 50,
    //marginTop: 10,
    marginHorizontal: 50,
    //paddingHorizontal: 10,
    //marginHorizontal: 100,
    fontWeight: 'bold',
  },

  botaoTexto: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
    //fontStyle: 'italic'
  },

});

export default styles;
