import React from 'react';
import Cadastro from './components/Cadastro';
import ListaUsuarios from './components/ListaUsuarios';
import styled from 'styled-components';

const StyleApp = styled.div`
  margin: 20px;
`

const listaDeUsuarios = [{
  id: 1,
  nome: "Carol",
  email: "carol@carol.com",
},
{
  id: 2,
  nome: "Luiz",
  email: "luiz@luiz.com",
}]

class App extends React.Component {
  
  render () {
    return (
      <StyleApp>
        <button>Ir para página de lista</button>
        <button>Ir para página de registro</button>
        <Cadastro listaDeUsuarios={listaDeUsuarios}/>
        <ListaUsuarios/>
      </StyleApp>
    )
  }
}

export default App;
