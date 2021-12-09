import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router";
import { FaShieldAlt, FaArrowLeft } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';
import { FiCalendar, FiMapPin, FiFlag, FiAnchor, FiClipboard, FiCheckCircle, FiXCircle} from "react-icons/fi";
import moment from 'moment';
import JoinButton from './JoinButton';
import { CurrentUserContext } from "../all-contexts/currentUserContext";
import ActivityParticipant from "./ActivityParticipant";

const ActivityDetails = () => {

    const history = useHistory();
    const { _id } = useParams();
    const [ postData, setPostData] = useState(null);
    const [ postStatus, setPostStatus ] = useState('loading');
    const { currentUser } = useContext(CurrentUserContext);

    // Create an endpoint to fetch a specific post information
    useEffect(()=>{
        fetch(`/posts/${_id}`)
        .then( res => res.json())
        .then( data =>{
            console.log(data.post);
            setPostData(data.post);
            setPostStatus('idle');
        })
    },[]);

    if( postStatus === 'loading'){
        return (
            <CircleWrapper>
                <CircularProgress style={{'color': '#EE6C4D'}} />
            </CircleWrapper>)
    }
    return(
        <Wrapper>
            <ReturnBar>
                <ReturnButton onClick = {() => history.goBack()}>
                    <FaArrowLeft size ={30}/>
                </ReturnButton>
            </ReturnBar>
            <Summary>
                <FaShieldAlt size = {100} color = {'#EE6C4D'}/>
                { postData.creator_id !== currentUser._id && <JoinButton postData = {postData} />}
                <Type>
                    <span>{postData.activityType}</span>
                    {" - "}
                    <span>{postData.level} Level</span>
                </Type>
                <Date>
                    {moment(postData.activityDate.date, 'YYYY-MM-DD').format('ddd MMMM Do YYYY')}
                </Date>
                <Time>
                    {moment(postData.activityDate.from , 'HH:mm').format('hh:mm A')} to {moment(postData.activityDate.to , 'HH:mm').format('hh:mm A')}
                </Time> 
                <SubContainer>
                    <Text>
                        <FiClipboard size = {20}/>
                        <span>{postData.limit - postData.joining.length} spots left</span>
                    </Text>
                    <Text>
                        <FiMapPin size = {20}/>
                        <span>{postData.activityAddress.city}, {postData.activityAddress.province} </span>
                    </Text>
                </SubContainer>
            </Summary>

            <Container>
                <Description>
                    <h2>Desciption</h2>
                    <p>
                        {postData.desciption}
                        {postData.desciption}
                    </p>
                </Description>
                <Address>
                    <h2>Address</h2>
                    <p>
                    {postData.activityAddress.street}{', '}
                    {postData.activityAddress.city}{', '}
                    {postData.activityAddress.province}{', '}
                    {postData.activityAddress.postalCode}
                    </p>
                </Address>
            </Container>
            <Container>
                <Description>
                    <h2>Participants</h2>
                    <ParticipantsContainer>
                        <ActivityParticipant role = {'Activity Host'} _id = {postData.creator_id} />
                        {
                            postData.joining.map( (participant) => {
                                if ( participant._id !==  postData.creator_id){
                                    return(
                                        <ActivityParticipant role = {'Participant'} _id = {participant._id} />
                                        )
                                }
                            })
                        }
                    </ParticipantsContainer>
                </Description>
            </Container>
            <br/>
            <br/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
overflow: auto;
`;

const CircleWrapper = styled.div`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
`;

const ReturnBar = styled.div`
/* border: 1px solid red; */
padding: 10px 10px;
`;

const ReturnButton = styled.button`
background: none;
color: inherit;
border: none;
padding: 0;
font: inherit;
cursor: pointer;
outline: inherit;
`;

const Summary = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: 1px solid green; */
padding: 30px 0px;
`;

const Container = styled.div`
padding: 0px 15px;
`;
const Description = styled.div`
h2{
    font-size: 1.5em;
    border-bottom: 2px solid #E0FBFC;
    padding-bottom: 6px;
    color: #EE6C4D;
}
p{
    margin:10px 0px;
}
`;
const Address = styled.div`
h2{
    font-size: 1.5em;
    border-bottom: 2px solid #E0FBFC;
    padding-bottom: 6px;
    color: #EE6C4D;
}
p{
    margin:10px 0px;
}
`;

const Date = styled.div`
margin-top:5px;
font-size: 1.2em;
`;
const Time = styled.div`
margin-top:5px;
font-size: 1.2em;
`;
const Type = styled.div`
font-weight: 600;
font-size: 1.6em;
color: #EE6C4D;
`;

const SubContainer = styled.div`
display:flex;
/* border: 1px solid white; */
color: #BCDEEB;
font-size: 1.1em;
`;

const Text = styled.div`
display:flex;
margin: 7px;
align-items: center;
span{
    margin-left:7px;
}
`;

const ParticipantsContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 10px;
`;

export default ActivityDetails