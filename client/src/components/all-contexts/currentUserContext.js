// *******************************************************************************
// This file is used authnticate user logged in and update the current user info
// *******************************************************************************
import React, { useState, createContext, useEffect } from "react";

export const CurrentUserContext = createContext(null);
export const CurrentUserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        fetch('/get-login-session')
        .then(res => res.json())
        .then( data => {
            if( data.status === 200){
                setCurrentUser(data.result);
                setIsUserLoggedIn(true);
                console.log(data.message)
            }
            else {
                setIsUserLoggedIn(false);
                console.log(data.message);
            }
        })
        return () => {
            setCurrentUser(null);
            isUserLoggedIn(false);
        }
    }, [])

    return (
        <CurrentUserContext.Provider
        value={{
            currentUser,
            setCurrentUser,
            isUserLoggedIn,
            setIsUserLoggedIn
        }}
        >
        {children}
        </CurrentUserContext.Provider>
    );
};
