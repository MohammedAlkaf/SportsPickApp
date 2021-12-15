import React, { useContext, useEffect, useState, memo } from "react";
import styled from "styled-components";
import SingleNotification from "./SingleNotification";
import { CurrentUserContext } from "../all-contexts/currentUserContext"

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
        return(
            <div>
                loading
            </div>
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

const Container = styled.div`
    display: flex;
	flex-direction: column-reverse;
    justify-content: flex-end;
    overflow: auto;
    height:calc( 100% - 40px);
`;

export default Notifications