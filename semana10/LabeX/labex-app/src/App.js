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


const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;



