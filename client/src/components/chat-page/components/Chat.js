import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { db } from '../firebase';
import SendMessage from './SendMessage';
import moment from 'moment';

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
                {messages.map(({ id, text, photoURL, uid, displayName, createdAt }) => (
                    <div>
                        {
                            uid === currentUser._id 
                            ? 
                            <MessageContainerSent>
                                <UserImg src={photoURL} alt="" />
                                <MessageInfoSent>
                                    <MessageSent key={id} >
                                        <Text>{text}</Text>
                                    </MessageSent>
                                    <Time>{moment(createdAt).calendar()}</Time>
                                </MessageInfoSent>
                            </MessageContainerSent>
                            :
                            <MessageContainerReceived>
                                <UserImg src={photoURL} alt="" />
                                <MessageInfo>
                                    <Sender>{displayName}</Sender>
                                    <MessageReceived key={id} >
                                        <Text>{text}</Text>
                                    </MessageReceived>
                                    <Time>{moment(createdAt).calendar()}</Time>
                                </MessageInfo>
                            </MessageContainerReceived>
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
padding-top:10px;
`;

const MessagesContainer = styled.div`
    display: flex;
    height: calc( 100% - 60px);
    flex-direction: column;
    overflow: auto;
`;

const MessageContainer = styled.div`
display:flex;
/* border:1px solid red; */
padding:5px;
`;

const MessageInfo = styled.div`
display: flex;
flex-direction:column;
align-items: baseline;
`;

const MessageInfoSent = styled(MessageInfo)`
	align-items: flex-end;
`;

const Sender = styled.div`
font-size:0.7em;
margin-left: 9px;
margin-bottom:3px;
`;
const MessageContainerSent = styled(MessageContainer)`
flex-direction: row-reverse;
`;

const Time = styled.div`
font-size:0.7em;
margin: 3px 20px;
color: grey;
`;

const MessageContainerReceived = styled(MessageContainer)`
`;

const Message = styled.div`
    display: flex;
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
    margin-right:10px;
    background-color: #3C4552;
    color: white;
    border-top-right-radius: 0px;
    flex-direction: row-reverse;
    text-align: end;
    float: right;
`;

const MessageReceived = styled(Message)`
    margin-left:10px;
    border: 1px solid lightgray;
    background-color: #FAFAFA;
    border-top-left-radius: 0px;
    float: left;
`;

const UserImg = styled.img`
    border-radius: 50%;
    height: 45px;
    border: 2px solid white;
`;

const Text = styled.p`
    padding: 0px 5px;
    font-size: 1em;
    margin-left: 10px;
    margin-right: 10px;
    overflow-wrap: break-word;
`;

export default Chat

