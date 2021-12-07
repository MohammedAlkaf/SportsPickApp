import React from "react";
import styled from "styled-components";
import { FiCalendar, FiMapPin, FiFlag, FiAnchor, FiClipboard } from "react-icons/fi";
import moment from 'moment';

// Here I should be passing the data of the activity I want to show.. no fetch here 
const SingleActivity = ({ post }) => {

    console.log(post);

    const iconSize = 25;

    return (
        <Wrapper>
            <Conatiner>
                <FiCalendar size = {40}/>
                <SubContainer1>
                    <ActivityDate>
                        {post.activityDate.date}
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

const Wrapper = styled.div`
/* border: 1px solid red; */
padding: 5px;
margin:15px;
border-radius: 10px;
background: #293241;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`
const Conatiner = styled.div`
display: flex;
align-items: center;
/* border: 1px solid green; */
border-radius: 10px 10px 0px 0px;
padding:10px;
background: rgba(61, 90, 128, 0.8);
`

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
margin:4px;
display: flex;
align-items: center;
span{
    margin: 0px 5px;
}
`;

export default SingleActivity