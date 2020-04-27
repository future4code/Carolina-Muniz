import React from 'react';
import './App.css';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { Agradecimento } from './components/Agradecimento';

function App() {
  return ( 
    <div className="app-container">
      <button> Próxima etapa </button>
      <Etapa1/>
      <Etapa2/>
      <Etapa3/>
      <Agradecimento/>
    </div>
    );
}

export default App;
