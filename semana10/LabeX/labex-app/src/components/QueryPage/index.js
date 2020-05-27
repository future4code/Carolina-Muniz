import React from "react";
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'


const QueryStyle = styled.div`
  color: #ff5f00;
  text-align: center;
`

const FormStyle = styled.div`
  display: grid;
  width: 60%;
  gap: 15px;
  
`  


const QueryPage = () => {
  return (
  <QueryStyle>
    
    <h1>Preencha os campos abaixo</h1>
    <form>
      <FormStyle>
        <TextField
          required
          id="outlined-required"
          label="Nome"
          defaultValue=""
          variant="outlined"
          />
        
        <TextField
          required
          id="outlined-required"
          label="E-mail"
          defaultValue=""
          variant="outlined"
          />
        
        <TextField
          required
          id="outlined-required"
          label="Mensagem"
          defaultValue=""
          variant="outlined"
          />
        
        <Button variant="contained">Enviar</Button>
      </FormStyle> 
    </form>
   
  </QueryStyle>
  );
};

export default QueryPage;