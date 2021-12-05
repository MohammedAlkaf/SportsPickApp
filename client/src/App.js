import React from "react";
import GlobalStyles from "./GlobalStyles";
import LoginSignupPage from "./components/login-signup-pages/LoginSignupPage";
import LoginPage from "./components/login-signup-pages/LoginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupPage from "./components/login-signup-pages/SignupPage";
import styled from "styled-components";

function App() {

  return (
      <BrowserRouter>
      <GlobalStyles />
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <LoginSignupPage/>
          </Route>
          <Route path="/signup">
            <SignupPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/profile/:id">
            This page displays a user's profile page
          </Route>
          <Route path="/group-chats">
            This page shows all groups chats
          </Route>
          <Route path="/group-chats/:id">
            This page shows all groups chats
          </Route>
          <Route path="/create-acitvity">
            This page shows form to create an activity
          </Route>
          <Route path="/activity/:id">
            This page shows form to create an activity
          </Route>
          <Route path="">404: Oops!</Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
width: 100vw;
height: 100vh;
`;

export default App;
