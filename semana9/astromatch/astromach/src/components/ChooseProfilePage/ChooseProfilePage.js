import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ChooseButtons from './ChooseButtons';
import axios from 'axios';

function ChooseProfilePage() {
  const [profileToChoose, setProfileToChoose] = useState(undefined)

  const getProfileTochose = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carolina-muniz-julian/person')
    .then((response) => {
      setProfileToChoose(response.data.profile)
    })
  }

const chooseProfile = (choice) => {
  const body = {
    choice: choice,
    id: profileToChoose.id,
  }
  
  setProfileToChoose(undefined)

  axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carolina-muniz-julian/choose-person', body)
  .then((response) => {
    getProfileTochose()
  })
}

  useEffect(() => {
    getProfileTochose()
}, []);

const onClickNo = () => {
  chooseProfile(false)
}

const onClickYes = () => {
  chooseProfile(true)
}

  return (
    <div>
      { profileToChoose ?
      (<>
      <ProfileCard profile={profileToChoose}/>
      <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes}/>
      </>) : <p>Carregando...</p>
      }
    </div>
  );
}

export default ChooseProfilePage;