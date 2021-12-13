import React, { useContext } from "react";
import styled from "styled-components";
import SingleActivity from "../acitivity-components/SingleActivity";
import CircularProgress from '@mui/material/CircularProgress';
import { CurrentUserLocation } from "../all-contexts/currentLocationContext";

const Search = ({postsData, postDataStatus}) => {

    const { currentLocation, getDistance } = useContext(CurrentUserLocation);

    if(postDataStatus === 'loading'){
        return (
            <CircleWrapper>
                <CircularProgress style={{'color': '#EE6C4D'}} />
            </CircleWrapper>)
    }

    // // Add distance from current location for each post
    // const updatePostsData = postsData.map( (post) => {
    //     const newPost = { ...post, distance: getDistance(currentLocation, post.activityAddress.coordinates ) };
    //     return newPost
    // })

    // const sortedPostsData = updatePostsData.sort( (a,b) => a.distance - b.distance);

    return(
        <Wrapper>
            {
                postsData.map( (post) => {
                    return <SingleActivity key = { post._id} post = {post}/>
                })
            }
            <br/>
            <br/>
            <br/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
overflow: auto;
height: 100%;
z-index:-100;
`;

const CircleWrapper = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
`;

export default Search