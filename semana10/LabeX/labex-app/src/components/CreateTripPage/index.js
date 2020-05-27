import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const FormTripStyle = styled.div`
  display: grid;
  width: 60%;
  justify-content:center;
  gap: 15px;
`

const TripStyle = styled.div`
    color: #ff5f00;
    text-align: center;
`


const CreateTripPage = () => {
  return (
    <TripStyle>
      <h1>Cadastrar viagem</h1>
      <form>
        <FormTripStyle>
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
            label="Planeta"
            defaultValue=""
            variant="outlined"
            />
          
          <TextField
            required
            id="outlined-required"
            label="Data"
            defaultValue=""
            variant="outlined"
            />

          <TextField
            required
            id="outlined-required"
            label="Descrição"
            defaultValue=""
            variant="outlined"
            />

          <TextField
            required
            id="outlined-required"
            label="Tempo de duração"
            defaultValue=""
            variant="outlined"
            />      

          <Button variant="contained">Criar</Button>
        </FormTripStyle>  
      </form>
     
    </TripStyle>
    );
  };
  

export default CreateTripPage;