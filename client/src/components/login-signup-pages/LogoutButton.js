import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { CurrentUserContext } from "../all-contexts/currentUserContext";
import { FiLogOut } from "react-icons/fi";

//*****************************************************************
// A log out button in the current user profile. It calls the endpoint
// that clears all currentUser data info in the database collection
// 'currentUser' 
//*****************************************************************

const LogoutButton = () => {
    const history = useHistory();
    const { setIsUserLoggedIn, currentUser } = useContext(CurrentUserContext);

    const handleLogout = () => {

        console.log('logged out');

        fetch(`/loggedout/${currentUser.email}`,
        {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.message);
            history.push('/');
            localStorage.clear();
            setIsUserLoggedIn(false);
        });

    }
    return(
        <Button onClick = {() => handleLogout()}>
            <span>Logout</span> <FiLogOut/>
        </Button>
    );
}

const Button = styled.div`
    padding: 5px 20px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EE6C4D;
    color:white;
    border:2px solid white;
    border-radius: 6px;
    span{
        margin-right: 4px;
    }
`;

export default LogoutButton