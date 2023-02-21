import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ProdutosContext } from '../../contexts/ProdutosContext';
import { estilos } from './estilos';
import { useContext } from 'react';

export function Produto({ item, adicionar, remover = false }) {
  const { 
    viuProduto,
    removeProduto
  } = useContext(ProdutosContext);

  return (
    <View style={estilos.cartao}>
      <Image style={estilos.imagem} source={item.imagem}/>
      <View style={estilos.textoContainer}>
        <Text style={estilos.texto} numberOfLines={1}>{item.texto}</Text>
        <Text style={estilos.preco}>R$ {item.preco}</Text>
      </View>
      { adicionar &&
      <TouchableOpacity style={estilos.botaoAdicionar} onPress={() => {viuProduto(item)}}>
        <Text style={estilos.botaoTexto}>+</Text>
      </TouchableOpacity>}
      { remover &&
      <TouchableOpacity style={estilos.botaoRemover} onPress={() => {
          removeProduto(item.id);

        }}>
        <Text style={estilos.botaoTexto}>-</Text>
      </TouchableOpacity>}
    </View>
  );}