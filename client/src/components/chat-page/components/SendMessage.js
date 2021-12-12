import React, { useState } from 'react';
import styled from "styled-components";
import { db, auth } from '../firebase';
import firebase from 'firebase';
import noImg from '../../assests/noImg.png';

function SendMessage({ scroll, currentUser, activityId }) {
    const [msg, setMsg] = useState('')

    const sendMessage = async (ev) => {

        ev.preventDefault()
        const { _id, imgSrc, displayName} = currentUser
        const date = new Date;

        await db.collection(`activityId_${activityId}`).add({
            displayName,
            text: msg,
            photoURL: imgSrc !== '' ? imgSrc : noImg ,
            uid: _id,
            createdAt: date.toISOString()
        })
        setMsg('')
        scroll.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        scroll.current.scrollTop = scroll.current.scrollHeight - scroll.current.clientHeight;
    }

    return (
        <>
            <form onSubmit={(ev)=>sendMessage(ev)}>
                <SendMessageContainer>
                    <Input placeholder='Message...' type="text" value={msg} onChange={(ev) => setMsg(ev.target.value)} />
                    <Button type="submit">Send</Button>
                </SendMessageContainer>
            </form>
        </>
    )
}

const SendMessageContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 60px;
    width: 100%;
    padding: 10px;
    background-color: #293241;

`;

const Input = styled.input`
    height: 100%;
    margin: 0px 10px;
    width:100%;
    font-size: 1.1em;
    outline: none;
    color: white;
    background-image:none;
    background-color:transparent;
    box-shadow: none;
    overflow-wrap: break-word;  
    word-wrap: break-word; 
    word-break: break-word;
`;
const Button = styled.button`
    font-size: 1.3em;
    font-weight:bold;
	border: 2px solid white;
	padding: 0;
	cursor: pointer;
    border-radius: 5px;
    background: #EE6C4D;
    color:white;
    width:100px;
`;

export default SendMessage