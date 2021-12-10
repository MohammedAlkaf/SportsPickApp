// *******************************************************************************
// This file is used authnticate user logged in and update the current user info
// *******************************************************************************
import React, { useState, createContext, useEffect, useContext } from "react";

export const CurrentUserContext = createContext(null);
export const CurrentUserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserStatus, setCurrentUserStatus] = useState("idle");
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [errorStatus, setErrorStatus] = useState({ status: "idle", error: "no error" });

    const updateCurrentUser = (history,email) => {
        setCurrentUserStatus('loading')
        fetch(`/loggedin/${email}`)
        .then((res) => res.json())
        .then((data) => {
            if ( data.status === 200 ){
                console.log(data.result);
                setCurrentUser(data.result);
                localStorage.setItem('currentUser', JSON.stringify(data.result));
                setIsUserLoggedIn(true);
                console.log(data.message);
                history.push(`/profile/${data.result._id}`);
                setCurrentUserStatus('idle')
            }
            else {
                setErrorStatus({ status: "err", error: data.message })
                setCurrentUserStatus('idle')
            }
        })
    };

    useEffect(() => {
        const ls = window.localStorage.getItem("currentUser");
        if (ls !== undefined && ls !== null) {
            setCurrentUser(JSON.parse(ls));
        }
    }, []);

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
