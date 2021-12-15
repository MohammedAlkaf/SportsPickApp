import React, { useContext, useEffect, useState, memo } from "react";
import styled, { keyframes } from "styled-components";
import SingleNotification from "./SingleNotification";
import { CurrentUserContext } from "../all-contexts/currentUserContext"
import CircularProgress from '@mui/material/CircularProgress';

const Notifications = () => {

    const { currentUser } = useContext(CurrentUserContext);
    const  [notifications, setNotifications ] = useState([]);
    const  [notificationsStatus, setNotificationsStatus ] = useState('loading');

    // This is not a practical way to fetch notifications, but I am only doing it now because
    // it will require a lot of refactoring to put current user profile in context instead of 
    // fetching it everytime the notification page is mounted
    useEffect( () => {
        setNotificationsStatus('loading')
        fetch(`/users/${currentUser._id}`)
        .then(res => res.json())
        .then(data => {
            setNotifications(data.user.notifications);
            setNotificationsStatus("idle");
        })
    },[]);

    if( notificationsStatus === 'loading'){
        return (
            <CircleWrapper>
                <CircularProgress style={{'color': '#EE6C4D'}} />
            </CircleWrapper>
        )

    }

    return(
        <Wrapper>
            <h2>Notifications</h2>
            <Container>
                {
                    notifications.map( (notification) => <SingleNotification key = {notification._id} notification = {notification}/>)
                }
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height:100%;
h2{
    display: flex;
    align-items: center;
    justify-content:center;
    height:40px;
    text-align:center;
}
`;

const slideIn = keyframes`
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

const CircleWrapper = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
`;

const Container = styled.div`
    display: flex;
	flex-direction: column-reverse;
    justify-content: flex-end;
    overflow: auto;
    height:calc( 100% - 40px);
    animation: ${slideIn} 0.4s ease-out both;
`;

export default Notifications