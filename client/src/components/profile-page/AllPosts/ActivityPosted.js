import React, { useEffect, useContext, useState} from "react";
import styled from "styled-components";
import SingleActivity from "../../acitivity-components/SingleActivity";
import { CurrentUserContext } from '../../all-contexts/currentUserContext';
import CircularProgress from '@mui/material/CircularProgress';

const ActivityPosted = () => {
    const { currentUser } = useContext(CurrentUserContext)
    const [ postsData, setPostsData ] = useState([]);
    const [ postDataStatus, setPostDataStatus ] = useState('loading');

    useEffect(()=>{
        // get the data of all posts in the system
        fetch(`/posts/${currentUser._id}`)
        .then(res=> res.json())
        .then(data => {
            setPostsData(data.posts); // Store all posts data in postsData state variable
            console.log(data.posts);
            setPostDataStatus('idle');
        })
    },[])

    if( postDataStatus === 'loading'){
        return(
        <CircleWrapper>
            <CircularProgress style={{'color': '#EE6C4D'}} />
        </CircleWrapper>
        )
    }

    return(
        <Wrapper>
            { postsData.map( (post) => {
                return <SingleActivity post = {post}/>
            })}
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
overflow: auto;
height: calc(100% - 35px);
z-index:0;
`;

const CircleWrapper = styled.div`
display: flex;
height: calc(100% - 35px);
justify-content: center;
align-items: center;
`;
export default ActivityPosted