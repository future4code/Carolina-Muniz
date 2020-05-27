import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import styled from 'styled-components'


const FooterStyle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  color: #ff5f00;
`


const Footer = () => {
  return(
    <FooterStyle>
      <FacebookIcon />
      <InstagramIcon />
      <LinkedInIcon />
      <TwitterIcon />
      
    </FooterStyle>
  )
}
  

export default Footer;