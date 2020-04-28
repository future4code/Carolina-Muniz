import React from 'react';
import styled from 'styled-components';


const StyleCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 400px;
    height: 200px;
    margin: 30px;
    justify-content: space-evenly;    
`

class Cadastro extends React.Component {
    constructor(props) {
        super(props)
    }
    
  render () {
    const listaDosCadastrados = this.props.listaDeUsuarios.map((nome) => {
        console.log("cada usuário: ", nome)
        return nome
    })
    return (
      <StyleCadastro>
          <span>
            <label>Nome:</label> &nbsp;
            <input/>
          </span>
          <span>
            <label>E-mail:</label> &nbsp;
            <input/>
          </span>
          <button>Salvar</button>
      </StyleCadastro>
    )
  }
}

export default Cadastro;