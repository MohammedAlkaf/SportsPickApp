import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import SportsBackground from '../assests/SportsBackground1.jpg'
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
                <Logo src = {bgImg}/>
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
overflow: hidden;
`;

const BackgroundImg = styled.img`
position:absolute;
left:-50%;
opacity: 0.2;
transform: rotate(-90deg);
`;

const Logo = styled.img`
opacity: 0.8;
width:350px;
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
