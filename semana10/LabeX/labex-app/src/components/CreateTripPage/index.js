import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import axios from 'axios';

const FormTripStyle = styled.div`
  display: grid;
  justify-content:center;
  gap: 15px;
`

const TripStyle = styled.div`
    color: #ff5f00;
    text-align: center;
`


const CreateTripPage = () => {
  const createTrip = async () => {
    const body = {
      name: "",
      planet: "",
      date: "",
      description: "",
      durationInDays: ""
    }
    
    const response = await axios.posts(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-muniz-julian/trips",
      body, 
      {
        headers: {
          "Content-Type":"application/json",
          "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"
        }
      })
      response.then((response) => {
        console.log(response.data)
      }).catch((error)=>{
        console.log(error.response)
      }) 
  }

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

          <Button variant="contained" onClick={createTrip}>Criar</Button>
        </FormTripStyle>  
      </form>
     
    </TripStyle>
    );
  };
  

export default CreateTripPage;