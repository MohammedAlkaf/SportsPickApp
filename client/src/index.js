import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CurrentUserProvider } from '../src/components/all-contexts/currentUserContext'
ReactDOM.render(

  <CurrentUserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CurrentUserProvider>,
  document.getElementById("root")
);
