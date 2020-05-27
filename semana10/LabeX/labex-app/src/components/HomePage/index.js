import React from "react";
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import {useHistory} from 'react-router';


const HomeStyle = styled.div`
  color: #ff5f00;
  text-align: center;
`

const ButtonStyled = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-evenly;
`

const HomePage = () => {
  const history = useHistory();

  const goToTravelListPage = () => {
    history.push("/lista-de-viagens");
  } 

  const goToFormPage = () => {
    history.push("/formulario-de-inscricao")
  }

  return(
    <HomeStyle>
        
      <div>
        <h1>Não perca a oportunidade de viver uma experiência fantástica!</h1>
      </div>
        
      <ButtonStyled>
        <Button variant="contained" onClick={goToTravelListPage}>Conheça nossas viagens</Button>
        <Button variant="contained" onClick={goToFormPage}>Inscreva-se já!</Button>
      </ButtonStyled>
               
    </HomeStyle>
  )
}
  

export default HomePage;
