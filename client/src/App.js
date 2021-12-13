import React, { useContext, useState } from "react";
import GlobalStyles from "./GlobalStyles";
import LoginSignupPage from "./components/login-signup-pages/LoginSignupPage";
import LoginPage from "./components/login-signup-pages/LoginPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignupPage from "./components/login-signup-pages/SignupPage";
import styled from "styled-components";
import ChatLists from "./components/chat-page/AllJoinedChatsLists";
import { CurrentUserContext } from './components/all-contexts/currentUserContext';
import NavBar from "./components/nav-bar/NavBar";
import Profile from "./components/profile-page/Profile";
import Home from "./components/homefeed/Home";
import ActivityForm from "./components/create-activity-page/ActivityForm";
import ActivityDetails from "./components/acitivity-components/ActivityDetails";
import ChatSys from "./components/chat-page/ChatSys";

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
                  <ChatLists />
                </Route>
                <Route path ="/chats/:_id">
                  <ChatSys/>
                </Route>
                <Route path="/create-acitvity">
                  <ActivityForm/>
                </Route>
                <Route path="/home">
                  <Home/>
                </Route>
                <Route path="/activity/:_id">
                  <ActivityDetails/>
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  height: calc(100% - 60px);
  background: #293241;
  background: -webkit-linear-gradient(to bottom, #141e30, #243b55); 
  background: linear-gradient(to bottom, #141e30, #243b55);
  color: white;
  overflow: hidden;
  `;
export default App;
