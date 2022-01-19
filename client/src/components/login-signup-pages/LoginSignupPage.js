import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import SportsBackground from '../assests/wave-haikei.svg'
import bgImg from '../assests/bgImg.png';
//*****************************************************************
// This page is the fist page in the app, it gives the use the option
// to sign in or log in
//*****************************************************************
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
            <BackgroundImg src = {SportsBackground}/>
            {/* <Title>SportsPick</Title> */}
            <ButtonContainer>
                <Logo>
                    <span>SPORTS</span>
                    <span>PICK</span>
                    Get Together with One Click
                </Logo>
                <Quotes>
                    <p>“One man can be a crucial ingredient on a team, but one man cannot make a team.”</p>
                    <span>-Kareem Abdul-Jabbar</span>
                </Quotes>
                <LoginButton
                    onClick = {() => {handleLogin()}}
                >
                    Log In
                </LoginButton>
                
                <HorizontalLineContainer>
                    <hr style = {{ marginRight: '5px', width: '145px'}}/>
                    or
                    <hr style = {{ marginLeft: '5px', width: '145px'}}/>
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
overflow: hidden;
`;

const BackgroundImg = styled.img`
position:absolute;
height: 100%;
top:0;
`;

const Logo = styled.div`
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;
width:350px;
height: 350px;
font-size: 1em;
color: grey;

span {
    font-size: 4em;
    margin-bottom: 2px;
    font-family: 'Bebas Neue', cursive;
    color: #EE6C4D;
}
`;

const Quotes = styled.div`
    margin:20px;
    font-size: 1.2em;
    span {
        margin-top:5px;
        font-size: 0.8em;
        float:right;
        font-style: italic;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
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
    width:90%;
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
