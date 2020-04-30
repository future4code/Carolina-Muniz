import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyleApp = styled.div`
padding: 20px;
margin: 10px;
width: 500px;
border: 1px solid black;
`



export class App extends React.Component {
  state = {
    atividade: {}
  }

  componentDidMount = () => {
    this.gerarAtividade()
  }

  gerarAtividade = () => {
    axios.get("http://www.boredapi.com/api/activity/").then(response => {
      this.setState({atividade: response.data})
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <StyleApp>
        <button onClick={this.gerarAtividade}>Gerar Nova Atividade</button>
        <p><strong>Atividade: </strong>{this.state.atividade.activity}</p>
        <p><strong>Acessibilidade: </strong>{this.state.atividade.accessibility}</p>
        <p><strong>Tipo: </strong>{this.state.atividade.type}</p>
        <p><strong>Número de participantes necessários: </strong>{this.state.atividade.participants}</p>
        <p><strong>Preço: </strong>{this.state.atividade.price}</p>
      </StyleApp>
    );
  } 
}

export default App;
