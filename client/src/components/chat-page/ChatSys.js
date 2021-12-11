import './ChatSys.css';
import React from 'react';
import styled from "styled-components";
import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatSys = () => {
  const [user] = useAuthState(auth)
  return (
    <Wrapper>
      {user ? <Chat /> : <SignIn />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
height: 100%;
`;
export default ChatSys;