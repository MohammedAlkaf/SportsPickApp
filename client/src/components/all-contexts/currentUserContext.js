// *******************************************************************************
// This file is used authnticate user logged in and update the current user info
// *******************************************************************************
import React, { useState, createContext, useEffect } from "react";

export const CurrentUserContext = createContext(null);
export const CurrentUserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserStatus, setCurrentUserStatus] = useState("idle");
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [errorStatus, setErrorStatus] = useState({ status: "idle", error: "no error" });
    
    useEffect(() => {
        const ls = sessionStorage.getItem("currentUser");
        console.log(JSON.parse(ls));

        if (ls !== undefined && ls !== null) {
            setCurrentUser(JSON.parse(ls));
            setIsUserLoggedIn(true);
        }
    }, []);
    
    
    const updateCurrentUser = (history,email,password) => {
        setCurrentUserStatus('loading')
        fetch(`/loggedin?email=${email}&password=${password}`)
        .then((res) => res.json())
        .then((data) => {
            if ( data.status === 200 ){
                setCurrentUser(data.result);
                sessionStorage.setItem('currentUser', JSON.stringify(data.result));
                setIsUserLoggedIn(true);
                history.push(`/profile/${data.result._id}`);
                setCurrentUserStatus('idle')
            }
            else {
                setErrorStatus({ status: "err", error: data.message })
                setCurrentUserStatus('idle')
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
