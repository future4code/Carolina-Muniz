import React from "react";
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router';


const ReviewPageStyle = styled.div`
  color: #ff5f00;
  text-align: center;
`

const FormReviewStyle = styled.div`
  display: grid;
  width: 60%;
  justify-content:center;
  gap: 15px;
`

const ReviewPage = () => {
  const history = useHistory();

  const goToCreateTripPage = () => {
    history.push("/criar-viagens");
  }

  return (
    <ReviewPageStyle>
      <h1>Nossas viagens</h1>
        <form>
          <FormReviewStyle>
            
            
            <Button variant="contained" onClick={goToCreateTripPage}>Criar viagem</Button>
          </FormReviewStyle>
        </form>
    </ReviewPageStyle>
    );
  };
  

export default ReviewPage;