import React, { useEffect, useState } from 'react';
import MatchListItem from './MatchListItem';
import styled from 'styled-components';
import axios from 'axios';

const MatchContainer = styled.div`
  padding: 8px;

`

function MatchListPage() {
  const [matches, setMatches] = useState([])

useEffect(() => {
  axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carolina-muniz-julian/matches').then((response) =>{
    setMatches(response.data.matches)
  })
}, [])
  return (
    <MatchContainer >
      {matches.map((profile) => {
        return <MatchListItem profile={profile}/>
      })}

    </MatchContainer>
  );
}

export default MatchListPage;