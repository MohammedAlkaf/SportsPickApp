import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import noImg from '../assests/noImg.png';
import { useHistory } from "react-router";

const ActivityParticipant = ({ role, _id }) => {

    const [userData,setUserData] = useState(null);
    const [userDataStatus,setUserDataStatus] = useState("loading");
    const history = useHistory();

    useEffect( () => {
        fetch(`/users/${_id}`)
        .then(res => res.json())
        .then(data => {
            setUserData(data.user);
            setUserDataStatus("idle");
        })
    },[_id]);

    const handleUserProfile = () => {
        history.push(`/profile/${_id}`);
    }

    if( userDataStatus === 'loading'){
        return(
            <div></div>
        )
    }
    return(
        <Wrapper>
            <Container onClick = {() => handleUserProfile()}>
                <Role style = { role === 'Activity Host' ? { color:'#EE6C4D'} :{ color:'#98C1D9'}}>
                    {role}
                </Role>
                <SubContainer>
                    <UserImg src = { userData.imgSrc !== '' ? userData.imgSrc : noImg } />
                    <Username>
                        {userData.displayName}
                    </Username>
                </SubContainer>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width:50%;
/* border: 1px solid red; */
padding: 5px;
`;

const Container = styled.div`
width:100%;
/* border: 1px solid white; */
border-radius: 5px;
display: flex;
background-color: #3C4552;
flex-direction: column;
align-items: center;
padding: 5px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

const Role = styled.div`
color: #98C1D9;
`;

const SubContainer = styled.div`
display: flex;
width: 100%;
align-items: center;
margin: 5px 0px;
/* border: 1px solid white; */
`;

const UserImg = styled.img`
width:40px;
border-radius: 50%;
border: 1px solid white;
margin-right: 5px;
`;

const Username = styled.div`
font-size: 0.8em;
`;

export default ActivityParticipant