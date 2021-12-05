import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";

const LoginPage = () => {

    const [ userInfo, setUserInfo ] = useState({ email: ""});
    const [ loginButtonStatus, SetLoginButtonStatus] = useState('idle');
    const [ errorStatus, setErrorStatus ] = useState({status: 'idle', error: 'no error'});

    const handleInputChnage = (name,value) => {
        setUserInfo({ [name]:value });
        setErrorStatus({status: 'idle', error: 'no error'});
    }

    return (
        <Wrapper>
            <h1>Welcome Back !</h1>
            <Form>
                <InputContainer>
                        <HiOutlineMail size = {35}/>
                        <Input 
                            placeholder = 'Email Address' 
                            type = 'email'
                            onChange = {(ev) => {handleInputChnage('email',ev.target.value)}}
                        />
                </InputContainer>
                <Error>
                    { errorStatus.status === 'err' ? `* ${errorStatus.error} *` : ""}
                </Error>
                <ButtonContainer>
                    <LoginButton>
                        Log In
                    </LoginButton>
                </ButtonContainer>
            </Form>
        </Wrapper>
    );
};

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
    color: white;
`;

const Form = styled.form`
    position: relative; 
    width:100%;
    height:100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
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

const InputContainer = styled.div`
    display: flex;
    width:100%;
    margin-top:20px;
    justify-content: space-between;
    padding: 0px 5px;
`;

const Input = styled.input`
    width:100%;
    margin: 0px 10px;
    font-size: 1.3em;
    outline: none;
    border:none;
    border-bottom: 1px solid grey;
    color: white;
    background-image:none;
    background-color:transparent;
    box-shadow: none;
`;

const Error = styled.div`
    height: 20px;
    margin-top: 20px;
    color: red;
    font-size: 1.2em;
    text-align: center;
`;
export default LoginPage