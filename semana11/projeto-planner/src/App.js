import React from 'react';
import styled from 'styled-components';
import img from "./Image/fundo.jpeg"

const AppStyle = styled.div`
  padding: 10px;
  text-align: center;
  background-image: ${img};
  background-repeat: no-repeat; 
`

const TableStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 500px;
  text-align: center;
  
`

export class App extends React.Component{
  render(){
    return (
      <AppStyle>
    
        <h1>PLANNER SEMANAL</h1>
    
        <div>
          <label>
            Tarefa: 
            <input type="text" name="tarefa" value=""  />
          </label>
    
          <label>
            Dia da semana: 
            <select>
              <option>Segunda</option>
              <option>Terça</option>
              <option>Quarta</option>
              <option>Quinta</option>
              <option>Sexta</option>
              <option>Sábado</option>
              <option>Domingo</option>
            </select>
          </label>
    
          <button>Criar tarefa</button>
        </div>
    
        <TableStyle>
          <p>Segunda</p>
          <p>Terça</p>
          <p>Quarta</p>
          <p>Quinta</p>
          <p>Sexta</p>
          <p>Sábado</p>
          <p>Domingo</p>
        </TableStyle>
      </AppStyle> 
      );
    } 
  }
    
export default App;
