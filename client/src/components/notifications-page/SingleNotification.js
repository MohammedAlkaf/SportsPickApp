import React from "react";
import styled from "styled-components";
import moment from 'moment';
import noImg from'../assests/noImg.png';
import { useHistory } from "react-router";
//*****************************************************************
// This component is used to render a single notification block in
// the notification page
//*****************************************************************
const SingleNotification = ({notification}) => {

    const history = useHistory();

    // Clicking on user image navigates to the user profile
    const handleUserProfile = () => {
        history.push(`/profile/${notification.user._id}`);
    }
    // Clicking on the activity navigates to activity details
    const handleActivity = () => {
        history.push(`/activity/${notification.activity._id}`)
    }

    return(
        <Wrapper>
            <Container>
                <Img 
                src = { notification.user.imgSrc !== '' ? notification.user.imgSrc : noImg }
                onClick={()=> handleUserProfile()}
                />
                <SubContainer>
                    <NotificationDate>
                        {moment(notification.date).calendar()}
                    </NotificationDate>
                    <Title>
                        <span>
                            {notification.user.displayName}
                        </span>
                        {' '}
                        {notification.message}
                    </Title>
                    {
                        notification.activity !== null &&
                            <Details onClick={()=> handleActivity()}>
                                {notification.activity.type}{', '}
                                {moment(notification.activity.date.date, 'YYYY-MM-DD').format('ddd MMMM Do YYYY')}{', '}
                                {moment(notification.activity.date.from , 'HH:mm').format('hh:mm A')} - {moment(notification.activity.date.to , 'HH:mm').format('hh:mm A')}
                            </Details>
                    }
                </SubContainer>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    /* border: 1px solid red; */
    margin:8px;
`;

const Container = styled.div`
    display:flex;
    align-items: center;
    padding:7px 5px;
    background: #293241;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius:6px;
`;

const Img = styled.img`
    border-radius: 50%;
    height: 45px;
    border: 2px solid white;
`;

const SubContainer = styled.div`
margin-left:10px;
font-size:0.9em;
`;

const Title = styled.div`
color:#EE6C4D;
font-size:0.93em;
span{
    font-weight:bold;
}
`;

const Details = styled.div`
font-size:0.85em;
color:darkgrey;
`;

const NotificationDate = styled.div`
font-size:0.85em;
color:darkgrey;
`;

export default SingleNotification