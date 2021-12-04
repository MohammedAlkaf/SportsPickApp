import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button onClick = { () => { loginWithRedirect() } }>
            Log in
        </Button>
    );
};

const Button = styled.button`
    width:100px;
`;

export default LoginButton
