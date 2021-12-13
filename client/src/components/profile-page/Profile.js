import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { useParams, useHistory } from "react-router";
import CircularProgress from '@mui/material/CircularProgress';
import noImg from '../assests/noImg.png';
import LogoutButton from "../login-signup-pages/LogoutButton";
import Posts from "./AllPosts/Posts";
import { CurrentUserContext } from "../all-contexts/currentUserContext";
import { FiChevronLeft } from "react-icons/fi";
import moment from 'moment';


const Profile = () => {
    
    let history = useHistory();
    let { _id } = useParams();

    const { currentUser } = useContext(CurrentUserContext);
    const [profileData,setProfileData] = useState(currentUser);
    const [profileDataStatus,setProfileDataStatus] = useState("loading");
    
    useEffect( () => {

            setProfileDataStatus('loading')
            fetch(`/users/${_id}`)
            .then(res => res.json())
            .then(data => {
                setProfileData(data.user);
                setProfileDataStatus("idle");
            })

    },[]);

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
                            <FiChevronLeft size ={30}/>
                        </ReturnButton>
                    </ReturnBar>
                }
            </Banner>
            <UserInfoContainer>
                <ProfileImg src = { profileData.imgSrc !== '' ? profileData.imgSrc : noImg }/>
                <SubContainer>
                    <DisplayName>
                        <span>{profileData.displayName}</span>
                        <div>Joined on {moment(profileData.joined).format("MMM Do, YYYY")}</div>
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

const Wrapper = styled.div`
display:flex;
flex-direction: column;
height: 100%;
/* animation: ${PuffInCenter} 0.4s both; */
animation: ${slideIn} 0.4s ease-out both;

`;

const UserInfoContainer = styled.div`
display:flex;
flex-direction: column;
/* border:1px red solid; */
justify-content: flex-end;
height: 30%;
background: #293241;
padding-bottom: 10px;
`;

const Banner = styled.div`
width:100%;
height:20%;
/* border: 1px solid red; */
`;

const ProfileImg = styled.img`
position: absolute;
width: 150px;
height: 150px;
border-radius: 50%;
background-color: grey;
border: 5px solid #293241;
top: 28px;
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
div{
    padding: 2px 0px;
    font-size: 0.8em;
    color:grey;
}
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
padding: 5px 5px;
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