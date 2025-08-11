// src/components/Produtos.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import './Produtos.css'; // (opcional para estilos)

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      const { data, error } = await supabase.from('produtos').select('*');
      if (error) {
        console.error('Erro ao buscar produtos:', error);
      } else {
        setProdutos(data);
      }
    }

    fetchProdutos();
  }, []);

  return (
    <div className="produtos-container">
      {produtos.length === 0 ? (
        <p>Nenhum produto disponível.</p>
      ) : (
        produtos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <img src={produto.imagem_url} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <strong>R$ {Number(produto.preco).toFixed(2)}</strong>
          </div>
        ))
      )}
    </div>
  );
}
