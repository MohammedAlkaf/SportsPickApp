import React, { useContext } from "react";
import GlobalStyles from "./GlobalStyles";
import LoginSignupPage from "./components/login-signup-pages/LoginSignupPage";
import LoginPage from "./components/login-signup-pages/LoginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupPage from "./components/login-signup-pages/SignupPage";
import styled from "styled-components";
import { CurrentUserContext } from './components/all-contexts/currentUserContext';
import NavBar from "./components/nav-bar/NavBar";
import Profile from "./components/profile-page/Profile";
import Home from "./components/homefeed/Home";
function App() {

  const { isUserLoggedIn } = useContext(CurrentUserContext);

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
          {/* { isUserLoggedIn && */}
          { true &&
            <MainAppContainer>
              <Container>
                <Route exact path="/profile/:_id">
                  <Profile/>
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
                <Route path="/home">
                  <Home/>
                </Route>
                <Route path="/activity/:id">
                  This page shows form to create an activity
                </Route>
              </Container>
              <NavBar/>
            </MainAppContainer>
          }
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

const MainAppContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  height: calc(100vh - 70px);
  background: #293241;
  background: -webkit-linear-gradient(to bottom, #141e30, #243b55); 
  background: linear-gradient(to bottom, #141e30, #243b55);
  color: white;
  `;
export default App;
