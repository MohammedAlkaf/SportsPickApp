import React from "react";
import LoginPage from "./components/login/LoginPage";
import Profile from "./components/profile-page/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  // const { isLoading, isAuthenticated } = useAuth0();
  // if( isLoading ) return <div>Loading ...</div>
  // if( !isAuthenticated ) return <LoginPage/>

  return (
      <BrowserRouter>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            This page show all available acitvity in the area based on user city in profile
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
      </div>
    </BrowserRouter>
  );
}

export default App;
