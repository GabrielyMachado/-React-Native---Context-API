import { useContext } from 'react';
import { Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import { estilos } from './estilos';
import { TemaContext } from '../../contexts/TemaContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';

export default function Finalizar({navigation}) {

  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)

  const { usuario } = useContext(AutenticacaoContext);
  const { 
    quantidade,
    carrinho,
    limpaCarrinho
  } = useContext(ProdutosContext);
  
  const valorInicial = 0;
  const precoTotal = carrinho.reduce((acc, produto) => acc + produto.preco, valorInicial).toFixed(2)

  return (
    <View style={estilo.container}>
      <View style={estilo.informacoesEntregaArea}>
        <Text style={estilo.informacoesEntregaTitulo}>Informações da entrega</Text> 
        <View>
          <Text style={estilo.informacoesTexto}> Nome: {usuario.nome}</Text>
          <Text style={estilo.informacoesTexto}> Endereço: {usuario.endereco}</Text>
          <Text style={estilo.informacoesTexto}> E-mail: {usuario.email}</Text>
          <Text style={estilo.informacoesTexto}> Telefone: {usuario.telefone}</Text>
        </View>
      </View>
      <View style={estilo.informacoesExtraArea}>
        <Text style={estilo.informacoesTexto}> Quantidade: {quantidade}</Text>
        <Text style={estilo.informacoesTexto}> Preço Total: R${precoTotal}</Text>
      </View>
      <TouchableOpacity style={estilo.botao} onPress={ () => {
        limpaCarrinho();
        ToastAndroid.show('Compra efetuada com sucesso!', ToastAndroid.SHORT);
        navigation.navigate('Principal');
      }}>
        <Text style={estilo.textoBotao}> Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

