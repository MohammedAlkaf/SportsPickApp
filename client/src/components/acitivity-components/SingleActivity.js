import React from "react";
import styled from "styled-components";
import { keyframes } from 'styled-components'
import { FiCalendar, FiMapPin, FiFlag, FiAnchor, FiClipboard } from "react-icons/fi";
import moment from 'moment';
import SportsBackground from '../assests/SportsBackground.jpg';
import { useHistory } from "react-router";

// Here I should be passing the data of the activity I want to show.. no fetch here 
const SingleActivity = ({ post }) => {

    let history = useHistory();

    const iconSize = 25;

    const handleClick = () => {
        history.push(`/activity/${post._id}`)
    }
    console.log(post);
    return (
        <Wrapper onClick = {() => handleClick()}>
            <Conatiner>
                <BackgroundImg src = {SportsBackground} />
                <FiCalendar size = {45}/>
                <SubContainer1>
                        <ActivityDate>
                            {moment(post.activityDate.date, 'YYYY-MM-DD').format('ddd MMMM Do YYYY')}
                        </ActivityDate>
                        
                        <ActivityTime>
                            {moment(post.activityDate.from , 'HH:mm').format('hh:mm A')} - {moment(post.activityDate.to , 'HH:mm').format('hh:mm A')}
                        </ActivityTime>
                </SubContainer1>
            </Conatiner>
            <Text>
                <FiMapPin size = {iconSize}/>
                <span>{post.activityAddress.city}, {post.activityAddress.province}, Canada</span>
            </Text>

            <SubContainer2>
                <Text>
                    <FiFlag size = {iconSize}/>
                    <span>{post.activityType}</span>
                </Text>

                <Text>
                    <FiAnchor size = {iconSize}/>
                    <span>{post.level}</span>
                </Text>
            </SubContainer2>
            <Text>
                <FiClipboard size = {iconSize}/>
                <span>{post.limit - post.joining.length} remaining spots</span>
            </Text>

        </Wrapper>
    );
}

const slideIn = keyframes`
0% {
    -webkit-transform: rotateX(-100deg);
            transform: rotateX(-100deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0deg);
            transform: rotateX(0deg);
    -webkit-transform-origin: top;
            transform-origin: top;
    opacity: 1;
  }
`;

const Wrapper = styled.div`
/* border: 1px solid red; */
margin:15px;
border-radius: 10px;
background: #293241;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
animation: ${slideIn} 0.5s ease-in-out;

`
const Conatiner = styled.div`
font-weight: bold;
font-size: 1.2em;
position: relative;
overflow: hidden;
display: flex;
align-items: center;
/* border: 1px solid green; */
border-radius: 10px 10px 0px 0px;
padding:20px 10px;
z-index: 1;
`

const BackgroundImg = styled.img`
position: absolute;
right:-50%;
top:-100%;
z-index: -1;
opacity: 0.4;
transform: scale(0.7);
`;

const SubContainer1 = styled.div`
margin-left: 10px;
`;

const SubContainer2 = styled.div`
display: flex;
`;

const ActivityDate = styled.div``;

const ActivityTime = styled.div``;

const Text = styled.div`
/* border: 1px solid red; */
padding-bottom: 9px;
padding-left: 6px;
margin:4px;
display: flex;
align-items: center;
span{
    margin: 0px 5px;
}
`;

export default SingleActivity