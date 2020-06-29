import React from "react";
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'


const FormLoginStyle = styled.div`
  display: grid;
  justify-content:center;
  gap: 15px;
`

const LoginStyle = styled.div`
  color: #ff5f00;
  text-align: center;
`

const LoginPage = () => {
  return (
    <LoginStyle>
      <h1>Login</h1>
        <form>
          <FormLoginStyle>
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
            label="Senha"
            defaultValue=""
            variant="outlined"
            />
          
          <Button variant="contained">Fazer Login</Button>
          </FormLoginStyle>
        </form>
    </LoginStyle>
    );
  };
  
  export default LoginPage;