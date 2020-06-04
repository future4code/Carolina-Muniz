import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ButtonsConatiner = styled.div`
  display: flex;
  justify-content: space-around; 
`

function ChooseButtons(props) {
  
  return (
    <ButtonsConatiner >
      <button onClick={props.onClickNo}>Não</button>
      <button onClick={props.onClickYes}>Sim</button>
    </ButtonsConatiner>
  );
}

export default ChooseButtons;