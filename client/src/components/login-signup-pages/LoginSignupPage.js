import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const LoginSignupPage = () => {

    let history = useHistory();

    function handleSignup() {
        history.push("/signup");
    };

    function handleLogin() {
        history.push("/login");
    };
    return(

        <Wrapper>
            <Title>SportsPick</Title>
            <ButtonContainer>
                <Quotes>
                    <p>“Do you know what my favorite part of the game is?
                    The opportunity to play.”</p>
                    <span>-Mike Singletary</span>
                </Quotes>
                <LoginButton
                    onClick = {() => {handleLogin()}}
                >
                    Log In
                </LoginButton>
                
                <HorizontalLineContainer>
                    <hr style = {{ width: '145px'}}/>
                    or
                    <hr style = {{ width: '145px'}}/>
                </HorizontalLineContainer>
                <SignInButton
                    onClick = {() => {handleSignup()}}
                >
                    Sign Up
                </SignInButton>
            </ButtonContainer>
        </Wrapper>

    )
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
    background: #293241;
    background: -webkit-linear-gradient(to bottom, #141e30, #243b55); 
    background: linear-gradient(to bottom, #141e30, #243b55);
    align-items: center;
    font-weight: 400;
    padding:10px;
    color: white;
`;

const Title = styled.div`
    font-size: 2em;
`;

const Quotes = styled.div`
    margin:20px;
    font-size: 1.3em;
    span {
        margin-top:5px;
        float:right;
        font-style: italic;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const LoginButton = styled.button`
    font-size: 1.3em;
    font-weight:bold;
    margin:8px 20px;
    height:50px;
    background: #3D5A80;
	color: white;
	border: 2px solid white;
	padding: 0;
	cursor: pointer;
    border-radius: 5px;
`;

const SignInButton = styled(LoginButton)`
    background: #EE6C4D;
    color:white;
    margin-bottom: 20px;
`;

const HorizontalLineContainer = styled.div`
    display: flex;
    font-size: 1.1em;
`;

export default LoginSignupPage
