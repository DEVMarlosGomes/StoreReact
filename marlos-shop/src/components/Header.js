// src/components/Header.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Header.css';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <h1>Minha Loja</h1>
      {user ? (
        <>
          <span style={{ marginRight: '1rem' }}>Olá, {user.email}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button>Login</button> // Se quiser, aqui você já pode chamar o modal ou rota de login
      )}
    </header>
  );
}
