import React from "react";
import styled from "styled-components";
import LoginButton from "./LoginButton";

const LoginPage = () => {
    return (
        <Wrapper>
            <h1>This is the LoginPage</h1>

            <LoginButton />
        </Wrapper>
    );
};

const Wrapper = styled.div`
`;
export default LoginPage
