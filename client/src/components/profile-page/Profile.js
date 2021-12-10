import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { useParams, useHistory } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';
import noImg from '../assests/noImg.png';
import LogoutButton from "../login-signup-pages/LogoutButton";
import Posts from "./AllPosts/Posts";
import { CurrentUserContext } from "../all-contexts/currentUserContext";
import { FaArrowLeft } from "react-icons/fa";


const Profile = () => {
    let history = useHistory();
    let { _id } = useParams();

    const [profileData,setProfileData] = useState(null);
    const [profileDataStatus,setProfileDataStatus] = useState("loading");
    const { currentUser } = useContext(CurrentUserContext);
    
    useEffect( () => {
        setProfileDataStatus('loading')
        fetch(`/users/${_id}`)
        .then(res => res.json())
        .then(data => {
            setProfileData(data.user);
            setProfileDataStatus("idle");
        })
    },[_id]);

    console.log(profileData);

    if( profileDataStatus === 'loading' ){
        return (
        <CircleWrapper>
            <CircularProgress style={{'color': '#EE6C4D'}} />
        </CircleWrapper>)
    }

    return(
        <Wrapper>
            <Banner>
                { currentUser._id !== profileData._id &&
                    <ReturnBar>
                        <ReturnButton onClick = {() => history.goBack()}>
                            <FaArrowLeft size ={30}/>
                        </ReturnButton>
                    </ReturnBar>
                }
            </Banner>
            <UserInfoContainer>
                <ProfileImg src = { profileData.imgSrc !== '' ? profileData.imgSrc : noImg }/>
                <SubContainer>
                    <DisplayName>
                        {profileData.displayName}
                    </DisplayName>
                    {/* <FollowButton>
                        Follow
                    </FollowButton> */}
                    { currentUser._id === profileData._id &&
                        <LogoutButton/>
                    }
                </SubContainer>
                <Bio>
                    {profileData.bio}
                </Bio>
                <AccountStats>
                    <Stat>
                        {profileData.postedActivities.length}
                        <span>posts</span>
                    </Stat>
                    <Stat>
                        {profileData.followers.length}
                        <span>followers</span>
                    </Stat>
                    <Stat>
                        {profileData.following.length}
                        <span>following</span>
                    </Stat>
                </AccountStats>
            </UserInfoContainer>
            <Posts profileData = {profileData} />
        </Wrapper>
    )

}

const CircleWrapper = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
`;

const PuffInCenter = keyframes`
    0% {
        -webkit-transform: scale(2);
                transform: scale(2);
        -webkit-filter: blur(4px);
                filter: blur(4px);
        opacity: 0;
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-filter: blur(0px);
                filter: blur(0px);
        opacity: 1;
    }
`;

const Wrapper = styled.div`
display:flex;
flex-direction: column;
height: 100%;
animation: ${PuffInCenter} 0.4s both;

`;

const UserInfoContainer = styled.div`
display:flex;
flex-direction: column;
/* border:1px red solid; */
justify-content: flex-end;
height: 35%;
background: #293241;
padding-bottom: 10px;
`;

const Banner = styled.div`
width:100%;
height:15%;
/* border: 1px solid red; */
`;

const ProfileImg = styled.img`
position: absolute;
width: 150px;
height: 150px;
border-radius: 50%;
background-color: grey;
border: 5px solid #293241;
top: 18px;
left: 13px;
`
const SubContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
/* border: 1px solid green; */
height: 50px;
`

const DisplayName = styled.div`
margin: 10px;
font-size: large;
`;

const FollowButton = styled.button`
padding: 10px 20px;
margin: 10px;
`;

const Bio = styled.div`
margin: 10px;
font-size: 0.9em;
/* border: 1px solid yellow; */
`;

const AccountStats = styled.div`
display: flex;
justify-content: space-between;
/* border: 1px solid yellow; */
`

const Stat = styled.div`
flex:1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`


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
export default Profile