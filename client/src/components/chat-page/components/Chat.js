import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { db } from '../firebase'
import SendMessage from './SendMessage'

const Chat = ({ currentUser })=> {

    const scroll = useRef();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection('messages1').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, []);

    return (
        <Wrapper>
            <MessagesContainer ref={scroll}>
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        {
                            uid === currentUser._id 
                            ? 
                            <MessageSent key={id} >
                                <UserImg src={photoURL} alt="" />
                                <Text>{text}</Text>
                            </MessageSent>
                            : 
                            <MessageReceived key={id} >
                                <UserImg src={photoURL} alt="" />
                                <Text>{text}</Text>
                            </MessageReceived>
                        }
                    </div>
                ))}
            </MessagesContainer>
            <SendMessage scroll={scroll} currentUser = { currentUser }/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
height:100%;
`;

const MessagesContainer = styled.div`
    display: flex;
    height: calc( 100% - 60px);
    flex-direction: column;
    overflow: auto;
`;

const Message = styled.div`
    display: flex;
    margin: 20px;
    border-radius: 30px;
    align-items: center;
    color:black;
    padding:5px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;
    max-width:350px;
`;

const MessageSent = styled(Message)`
    background-color: #3C4552;
    color: white;
    border-top-right-radius: 0px;
    flex-direction: row-reverse;
    text-align: end;
    float: right;
`;

const MessageReceived = styled(Message)`
    border: 1px solid lightgray;
    background-color: #FAFAFA;
    border-top-left-radius: 0px;
    float: left;
`;

const UserImg = styled.img`
    border-radius: 50%;
    height: 45px;
    margin-top: -20px;
    border: 2px solid black;
`;

const Text = styled.p`
    font-weight: 500;
    font-size: 1.1em;
    margin-left: 10px;
    margin-right: 10px;
    overflow-wrap: break-word;
`;

export default Chat

