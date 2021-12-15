import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import {
  FiMessageSquare,
  FiUser,
  FiMapPin,
  FiImage,
  FiCalendar,
  FiEye,
  FiKey,
  FiChevronRight
} from "react-icons/fi";
import { CurrentUserContext } from "../all-contexts/currentUserContext";
import { useHistory } from "react-router";
import LoadingCircule from "../loading-components/loadingCircule";

const SignupPage = () => {
  const history = useHistory();

  const initialUserInfo = {
    displayName: "",
    imgSrc: "",
    bio: "",
    email: "",
    DOB: "",
    gender: "",
    location: "",
    password:"",
    confirmPassword:"",
  };

  const { updateCurrentUser } = useContext(CurrentUserContext);

  const IconSize = 35;

  const ref = useRef();
  const [newUserInfo, setNewUserInfo] = useState(initialUserInfo);
  const [signupButtonStatus, SetSignupButtonStatus] = useState("idle");
  const [errorStatus, setErrorStatus] = useState({
    status: "idle",
    error: "no error",
  });

  const handleInputChnage = (name, value) => {
    setNewUserInfo({ ...newUserInfo, [name]: value });
    setErrorStatus({ status: "idle", error: "no error" });
  };


  const handleSubmit = (ev) => {
    SetSignupButtonStatus("loading");
    ev.preventDefault();

    fetch("/users/add", {
      method: "POST",
      body: JSON.stringify(newUserInfo),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const { data, status, message } = json;
        if (status === 200) {
          console.log(data);
          console.log(message);
          updateCurrentUser(history, data.email, data.password);
        } else {
          setErrorStatus({ status: "error", error: message });
          console.log(data);
          console.log(message);
        }
        SetSignupButtonStatus("idle");
      })
  };

  return (
    <Wrapper>
      <h2>Create an account</h2>
      <Form
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
      >
        <InputContainer>
          <HiOutlineMail size={IconSize} />
          <Input
            placeholder="Email Address"
            type="email"
            onChange={(ev) => {
              handleInputChnage("email", ev.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <FiKey size={IconSize} />
          <Input
            placeholder="Password"
            type="password"
            onChange={(ev) => {
              handleInputChnage("password", ev.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={(ev) => {
              handleInputChnage("confirmPassword", ev.target.value);
            }}
            style = {{ marginLeft:'36px'}}
          />
        </InputContainer>
        <InputContainer>
          <FiUser size={IconSize} />
          <Input
            placeholder="Full Name"
            type="text"
            onChange={(ev) => {
              handleInputChnage("displayName", ev.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <FiCalendar size={IconSize} />
          <Input
            placeholder="Date of birth"
            type="text"
            ref={ref}
            onFocus={() => (ref.current.type = "date")}
            onBlur={() => (ref.current.type = "text")}
            onChange={(ev) => {
              handleInputChnage("DOB", ev.target.value);
            }}
          />
        </InputContainer>
        <InputContainer style={{ height: "120px" }}>
          <FiMessageSquare size={IconSize} />
          <Textfield
            placeholder="Tell us a little about about yourself"
            type="text"
            onChange={(ev) => {
              handleInputChnage("bio", ev.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <FiImage size={IconSize} />
          <Input
            placeholder="Profile Img URL"
            type="text"
            onChange={(ev) => {
              handleInputChnage("imgSrc", ev.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <FiMapPin size={IconSize} />
          <Input
            placeholder="City"
            type="text"
            onChange={(ev) => {
              handleInputChnage("location", ev.target.value);
            }}
          />
        </InputContainer>
        {errorStatus.status === "error" && (
          <Error>* {errorStatus.error} *</Error>
        )}
        <ButtonContainer>
          <SignUpButton type="submit">
          {
            signupButtonStatus === 'loading' ? <LoadingCircule/> : 'Sign Up'
          }
          </SignUpButton>
        </ButtonContainer>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #293241;
  background: -webkit-linear-gradient(to bottom, #141e30, #243b55);
  background: linear-gradient(to bottom, #141e30, #243b55);
  align-items: center;
  font-weight: 400;
  color: white;
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
  padding: 0px 5px;
`;

const Input = styled.input`
  width: 100%;
  margin: 0px 10px;
  font-size: 1.3em;
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
  color: white;
  background-image: none;
  background-color: transparent;
  box-shadow: none;

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

const Textfield = styled.textarea`
  padding: 5px;
  width: 100%;
  height: 100%;
  font-size: 1.3em;
  box-sizing: border-box;
  border: none;
  color: white;
  border-bottom: 1px solid grey;
  background-color: transparent;
  box-shadow: none;
  resize: none;
  margin: 0px 10px;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
`;

const SignUpButton = styled.button`
  background: #ee6c4d;
  font-size: 1.3em;
  font-weight: bold;
  margin: 8px 20px;
  margin-bottom: 20px;
  height: 50px;
  color: white;
  border: 2px solid white;
  padding: 0;
  cursor: pointer;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Error = styled.div`
  margin-top: 30px;
  color: red;
  font-size: 1.2em;
  text-align: center;
`;

export default SignupPage;
