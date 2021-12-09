import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
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
            { currentUser._id !== profileData._id &&
                <ReturnBar>
                    <ReturnButton onClick = {() => history.goBack()}>
                        <FaArrowLeft size ={30}/>
                    </ReturnButton>
                </ReturnBar>
            }
            <Banner>
                
            </Banner>
            <UserInfoContainer>
                <ProfileImg src = { noImg }/>
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
height: 100vh;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
display:flex;
flex-direction: column;
height: 100vh;
`;

const UserInfoContainer = styled.div`
display:flex;
flex-direction: column;
/* border:1px red solid; */
background: #293241;
padding-bottom: 10px;
`;

const Banner = styled.div`
width:100%;
height:15%;
`;

const ProfileImg = styled.img`
width: 150px;
border-radius: 50%;
background-color: grey;
border: 5px solid #293241;
margin-left:10px;
margin-top: -75px;
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