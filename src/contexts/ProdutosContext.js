import { createContext, useEffect, useState } from 'react';
import { pegarProdutos, salvarProduto, deletarProduto  } from '../servicos/requisicoes/produtos';

export const ProdutosContext = createContext({});

export function ProdutosProvider( {children}) {
    const [quantidade, setQuantidade] = useState(0);
    const [carrinho, setCarrinho] = useState([]);
    const [ultimosVistos, setUltimosVistos] = useState([]);

    useEffect(async () => {
        const resultado = await pegarProdutos();
        setCarrinho(resultado);
        setQuantidade(resultado.length);
    }, [])

    async function viuProduto(produto){
        setQuantidade(quantidade+1);
        const resultado = await salvarProduto(produto)
        let novoCarrinho = carrinho;
        novoCarrinho.push(resultado);
        setCarrinho(novoCarrinho);

        let novoUltimosVistos = new Set(ultimosVistos);
        novoUltimosVistos.add(produto);
        setUltimosVistos([...novoUltimosVistos]);
    }

    async function removeProduto(id) {
        deletarProduto(id);
        const resultado = await pegarProdutos();
        setCarrinho(resultado);
        setQuantidade(resultado.length);
    }

    async function limpaCarrinho() {
        carrinho.forEach((item) => deletarProduto(item.id))
        setQuantidade(0);
        setCarrinho([]);
    }
    
    return (
        <ProdutosContext.Provider value={{
            quantidade,
            carrinho,
            ultimosVistos,
            viuProduto,
            limpaCarrinho,
            removeProduto
        }}>
            {children}
        </ProdutosContext.Provider>
    )
}