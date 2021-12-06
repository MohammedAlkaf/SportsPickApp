import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { CurrentUserContext } from "../all-contexts/currentUserContext";

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
            Logout
        </Button>
    );
}

const Button = styled.div`
    padding: 10px 20px;
    margin: 10px;
`;

export default LogoutButton