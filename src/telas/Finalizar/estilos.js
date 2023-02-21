import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const estilos = (tema) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tema.fundo,
      flexDirection: 'column'
    },
    botao: {
      margin: 16,
      marginBottom: 32,
      paddingVertical: 16,
      borderRadius: 10,
      backgroundColor: tema.botao,
      marginTop: 'auto'
    },
    textoBotao: {
      fontSize: 18,
      fontWeight: 'bold',
      color: tema.preto,
      textAlign: 'center'
    },
    informacoesEntregaArea: {
      alignItems: "flex-start",
      minWidth: 250,
      marginTop: 16,
      marginHorizontal: 16,
      marginVertical: 8,
      padding: 16,
      backgroundColor: tema.cinza,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    informacoesExtraArea: {
      alignItems: "flex-start",
      minWidth: 250,
      padding: 16,
    },
    informacoesEntregaTitulo: {
      fontSize: 28,
      fontWeight: 'bold',
      color: tema.titulo,
      marginBottom: 16,

    },
    informacoesTexto: {
      fontSize: 18,
      color: tema.titulo,
    }

  })
};