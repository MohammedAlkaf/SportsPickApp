import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout/LogoutButton";


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const loggedUserInfo = JSON.stringify(user,null,2);

    return(
        <>
        {isAuthenticated &&
            <div>
                <LogoutButton/>
                <div>{loggedUserInfo}</div>
                <img src ={user.picture}></img>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        }
        </>
    );
}

export default Profile