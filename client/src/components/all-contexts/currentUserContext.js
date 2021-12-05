import React, { useState, createContext, useEffect, useContext } from "react";

export const CurrentUserContext = createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserStatus, setCurrentUserStatus] = useState("loading");
    const [errorStatus, setErrorStatus] = useState({ status: "idle", error: "no error" });

    const updateCurrentUser = async (email) => {
        console.log(email);
        await fetch(`http://localhost:8000/loggedin/${email}`)
        .then((res) => res.json())
        .then((data) => {
            if ( data.status === 200 ){
                setCurrentUser(data.result);
                setCurrentUserStatus('idle');
                console.log(data.message);
            }
            else {
                console.log('error');
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
            errorStatus
        }}
        >
        {children}
        </CurrentUserContext.Provider>
    );
};
