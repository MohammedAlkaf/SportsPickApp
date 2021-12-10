import React, { useContext, useState } from "react";
import styled from "styled-components";
import CircularProgress from '@mui/material/CircularProgress';
import { CurrentUserContext } from '../all-contexts/currentUserContext';
import { FiCheckCircle, FiXCircle} from "react-icons/fi";

const JoinButton = ({ postData }) => {

    const { currentUser } = useContext(CurrentUserContext);

    const initialJoiningStatus = postData.joining.some( (user) => user._id === currentUser._id) ? true: false;
    const [ isCurrentUserJoined, setIsCurreuntUserJoined ] = useState(initialJoiningStatus);

    const handleJoining = () => {
        
        setIsCurreuntUserJoined(!isCurrentUserJoined);

        fetch('/post/updateJoining',
        {
            method: "PUT",
            body: JSON.stringify({currentUser_id : currentUser._id , post_id: postData._id }),
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
        })
        .then( res => res.json())
        .then( data =>{
            console.log(data.message);
        })
    }

    const handleClickTest = () => {
        setIsCurreuntUserJoined(!isCurrentUserJoined);
        
    }

    if( postData.limit - postData.joining.length === 0){

        return(
            <JoiningStatus>
                <Status>
                    <FiXCircle size = {20} color = {'red'}/> 
                    <span style ={{color:'red'}}>No remaining spots for this activity</span>
                </Status>
                <br/>
            </JoiningStatus>
        )
    }
    return(
        <JoiningStatus>
            { isCurrentUserJoined 
            ?
                <>
                    <Status>
                        <FiCheckCircle size = {20} color = {'lightgreen'}/> 
                        <span>You have joined this activity</span>
                    </Status>
                    <Button onClick = {()=> handleJoining()} style = { { background:'red' }}>
                        withdraw
                    </Button>
                </>
            :
                <>
                    <Status>
                        <FiXCircle size = {20} color = {'red'}/> 
                        <span style ={{color:'red'}}>You have not joined this activity</span>
                    </Status>
                    <Button onClick = {()=> handleJoining()} style = { { background:'green' }}>
                        join
                    </Button>
                </>
            }
        </JoiningStatus>
    )
}

const Button = styled.button`
margin:10px;
color: inherit;
border: 2px solid white;
height: 40px;
width:100px;
padding: 5px 0px;
text-align: center;
font: inherit;
cursor: pointer;
outline: inherit;
`;

const JoiningStatus = styled.div`
margin-top: 5px;
display: flex;
flex-direction: column;
align-items: center;
/* border: 1px solid red; */
`;

const Status = styled.div`
display: flex;
align-items: center;

span {
    margin-left: 5px;
}
`;


export default JoinButton