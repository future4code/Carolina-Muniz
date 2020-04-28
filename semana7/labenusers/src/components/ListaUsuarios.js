import React from 'react';
import styled from 'styled-components';

const StyleLista = styled.div`
    text-align: center;
    width: 600px;
`
class ListaUsuarios extends React.Component {
  
  render () { 
    return (
      <StyleLista>
          <h2>Usuários Cadastrados</h2>
          <span>Nome</span> &nbsp;
          <button>Excluir</button>
          <hr/>
      </StyleLista>
    )
  }
}

export default ListaUsuarios;