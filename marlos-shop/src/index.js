import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // importa o App do arquivo App.js
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
