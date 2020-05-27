import React from "react";
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'

const FormPageStyle = styled.div`
  color: #ff5f00;
  text-align: center;
`

const FormStyle = styled.div`
  display: grid;
  width: 60%;
  justify-content:center;
  gap: 15px;
`


const FormPage = () => {
  return (
  <FormPageStyle>
    <h1>Formulário de inscrição</h1>
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
          label="Idade"
          defaultValue=""
          variant="outlined"
        />
        
        <TextField
          required
          id="outlined-required"
          label="Profissão"
          defaultValue=""
          variant="outlined"
        />      
        
        <TextField
          required
          id="outlined-required"
          label="Nacionalidade"
          defaultValue=""
          variant="outlined"
      />      
      
        <TextField
          required
          id="outlined-required"
          label="Nos fale porque devemos escolher você"
          defaultValue=""
          variant="outlined"
        />

        <Button variant="contained">Confirmar inscrição</Button>
      </FormStyle>   
    </form>
  </FormPageStyle>
  );
};

export default FormPage;