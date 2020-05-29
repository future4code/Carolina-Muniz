import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import QueryPage from "./components/QueryPage";
import FormPage from "./components/FormPage";
import TravelListPage from "./components/TravelListPage"
import LoginPage from "./components/LoginPage"
import CreateTripPage from "./components/CreateTripPage"
import ReviewPage from "./components/ReviewPage"
import IndividualReviewPage from "./components/IndividualReviewPage"
import Header from "./components/Header";
import Footer from "./components/Footer";

import styled from 'styled-components'
import img from './components/Images/fundo.jpg'


const AppStyle = styled.div`
  background-image: url(${img});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  padding: 10px;
`

const App = () => {
  return (
    
    <AppStyle>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/duvidas">
            <QueryPage />
          </Route>
          <Route exact path="/formulario-de-inscricao">
            <FormPage />
          </Route>
          <Route exact path="/lista-de-viagens">
            <TravelListPage />
          </Route>
          <Route exact path="/criar-viagens">
            <CreateTripPage />
          </Route>
          <Route exact path="/analise-de-inscricao-por-viagem">
            <ReviewPage />
          </Route>
          <Route exact path="/analise-de-inscricao-por-candidato">
            <IndividualReviewPage />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </AppStyle>
   
  );
};

export default App;



