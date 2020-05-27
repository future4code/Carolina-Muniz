import React from "react";
import logo from './Logo/logo.png'; 
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components'
import {useHistory} from 'react-router';


const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #ff5f00;
`

const IconStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: x-large;
`

const Header = () => {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/home");
  } 

  const goToQueryPage = () => {
    history.push("/duvidas");
  } 

  const goToLoginPage = () => {
    history.push("/login")
  }

  return(
    <HeaderStyle>
      
      <img src={logo} alt="Logo LabeX" width="10%"/>
      
      <IconStyle>
        <HomeIcon onClick={goToHomePage}/>
        <ContactSupportIcon onClick={goToQueryPage}/>
        <FingerprintIcon onClick={goToLoginPage}/>
      </IconStyle>

    </HeaderStyle>
  )
}
  

export default Header;