/* eslint-disable prettier/prettier */

import { Platform, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#7df',
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

  caixaInput: {
    height: 40,
    width: 300,
    backgroundColor: '#fff',
    //alignSelf: 'stretch',
    // borderWidth: 2,
    // borderColor: '#fff',
    // borderRadius: 5,
    padding: 10,
    //marginHorizontal: 0,
    marginVertical: 5,
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 150,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 4,
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    //marginHorizontal: 100,
  },

  botaoTexto: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },

  logoPequeno: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },

  textoNome: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 5,
    color: 'black',
  },

  textoBio: {
    padding: 10,
    color: 'grey',
  },

  foto: {
    flex: 1,
    height: 500,
    //overflow: 'hidden',
    //resizeMode: 'contain'
  },

  botoesLikeDislike: {
    flexDirection: 'row',
    marginBottom: 25,
  },

  botaozinho:{
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 2,
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 2,
    }
  },

  botaozinhoTexto: {
    color: 'black'
  }

});

export default styles;
