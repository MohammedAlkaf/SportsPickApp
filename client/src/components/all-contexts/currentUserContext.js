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

    const updateCurrentUser = (history,_id) => {
        fetch(`/loggedin/${_id}`)
        .then((res) => res.json())
        .then((data) => {
            if ( data.status === 200 ){
                console.log(data.result);
                setCurrentUser(data.result);
                localStorage.setItem('currentUser', JSON.stringify(data.result));
                setIsUserLoggedIn(true);
                console.log(data.message);
                history.push(`/profile/${data.result._id}`);
            }
            else {
                setErrorStatus({ status: "err", error: data.message })
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
