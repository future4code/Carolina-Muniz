import React from 'react';
import styled from 'styled-components';


const StyleCadastro = styled.div`
  display: grid;
  gap: 10px;
  justify-content: left;    
`

export class Cadastro extends React.Component {
  state = {
    nomeValue: '',
    emailValue: ''
  }

  onChangeName = (event) => {
    this.setState({nomeValue: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({emailValue: event.target.value})
  }

  onClickCadastrar = () => {
    console.log('Nome: ', this.state.nomeValue)
    console.log('E-mail: ', this.state.emailValue)
  }
    
  render () {
    return (
      <StyleCadastro>
        <input placeholder = {'Nome'} value={this.state.nomeValue} onChange={this.onChangeName} />
        <input placeholder = {'E-mail'} value={this.state.emailValue} onChange={this.onChangeEmail} />
        <button onClick={this.onClickCadastrar}>Cadastrar</button>
      </StyleCadastro>
    )
  }
}
