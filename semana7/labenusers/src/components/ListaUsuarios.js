import React from 'react';
import styled from 'styled-components';
import axios from 'axios'

const StyleLista = styled.div`
    display:flex;
    align-items: center;
`
export class ListaUsuarios extends React.Component {
  state = {
    listaDeUsuarios: [
      {
        "id": "string",
        "name": "string"
    }
    ]
  };

  componentDidMount() {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
    {
      headers: {
        Authorization: 'carolina-muniz-julian'
      }
    }
  ).then (response => {
    this.setState({listaDeUsuarios: response.data})
  })
  .catch(error => {
    console.log(error.response)
  })
  }
  
onClickDeletar = (usuarioID) => {
console.log(usuarioID)
axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioID}',
{
  headers: {
    Authorization: 'carolina-muniz-julian'
  }
}).then((response => {
  window.alert ('Usuário deletado com sucesso');
})
.catch(error => {
  window.alert('Erro ao apagar o usuário');
});
};

  render () { 
    return (
      <div>
        <h2>Usuários Cadastrados</h2>
        <div>
          {this.state.listaDeUsuarios.map(usuario => {
            return  (
            <StyleLista>
              <p>{usuario.name}</p> 
              <button onClick={() => this.onClickDeletar(usuario.id)}>Deletar</button>
            </StyleLista>
          );
        })}
        </div>
      </div>
    );
  }
}
