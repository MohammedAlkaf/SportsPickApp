import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { CurrentUserContext } from "../all-contexts/currentUserContext";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
    const history = useHistory();
    const { setIsUserLoggedIn } = useContext(CurrentUserContext);

    const handleLogout = () => {

        history.push('/');
        localStorage.clear();
        setIsUserLoggedIn(false);
    }
    return(
        <Button onClick = {() => {handleLogout()}}>
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