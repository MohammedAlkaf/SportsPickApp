// *******************************************************************************
// This file is used authnticate user logged in and update the current user info
// *******************************************************************************

import React, { useState, createContext, useEffect, useContext } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserStatus, setCurrentUserStatus] = useState("loading");
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [errorStatus, setErrorStatus] = useState({ status: "idle", error: "no error" });

    const updateCurrentUser = async (email) => {
        await fetch(`http://localhost:8000/loggedin/${email}`)
        .then((res) => res.json())
        .then((data) => {
            if ( data.status === 200 ){
                setCurrentUser(data.result);
                setIsUserLoggedIn(true);
                console.log(data.message);
            }
            else {
                setErrorStatus({ status: "err", error: data.message })
            }
        })
    };

    return (
        <CurrentUserContext.Provider
        value={{
            updateCurrentUser,
            currentUser,
            setCurrentUser,
            currentUserStatus,
            setCurrentUserStatus,
            setErrorStatus,
            errorStatus,
            isUserLoggedIn,
            setIsUserLoggedIn
        }}
        >
        {children}
        </CurrentUserContext.Provider>
    );
};
