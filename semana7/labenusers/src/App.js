import React from 'react';
import { ListaUsuarios } from './components/ListaUsuarios';
import styled from 'styled-components';
import { Cadastro } from './components/Cadastro';

const StyleApp = styled.div`
  margin: 20px;
`

class App extends React.Component {
  state = {
    paginaAtual: 'CADASTRO'
  }

  onClickMudaPagina = () => {
    const proximaPagina = this.state.paginaAtual === 'CADASTRO' ? 'LISTA' : 'CADASTRO'
    this.setState({paginaAtual: proximaPagina})
  }
  render () {
    return (
      <StyleApp>
        <button onClick={this.onClickMudaPagina}>
          {this.state.paginaAtual === 'CADASTRO' ? 
          'Ir para página de usuários cadastrados' : 'Voltar para página da cadastro'}
        </button>
        {this.state.paginaAtual === 'CADASTRO' ?  
        <Cadastro /> : <ListaUsuarios/>
        }
      </StyleApp>
    )
  }
}

export default App;
