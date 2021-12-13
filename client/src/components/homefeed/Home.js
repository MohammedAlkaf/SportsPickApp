import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import ToggleBar from "./ToggleBar";
import Map from "./all-activities-map";
import Search from "./all-activities-search";
import FilterBar from "./filterBar";
import { CurrentUserLocation } from "../all-contexts/currentLocationContext";

const Home = () => {
    const { currentLocation, getDistance } = useContext(CurrentUserLocation);

    const [ displayedPage, setDisplayedPage ] = useState(1);
    const [ postsData, setPostsData ] = useState([]);
    const [ postDataStatus, setPostDataStatus ] = useState('loading');

    const [ sportType, setSportType ] = useState('All');
    const [ sportLevel, setSportLevel ] = useState('All');

    useEffect(()=>{
        // get the data of all posts in the system
        fetch('/posts')
        .then(res=> res.json())
        .then(data => {
            setPostsData(data.posts); // Store all posts data in postsData state variable
            setPostDataStatus('idle');
        })
    },[])

    // Add distance from current location for each post
    const updatePostsData = postsData.map( (post) => {
        const newPost = { ...post, distance: getDistance(currentLocation, post.activityAddress.coordinates ) };
        return newPost
    })

    // Sort the posts based on distance from current location
    const sortedPostsData = updatePostsData.sort( (a,b) => a.distance - b.distance);



    return(
        <Wrapper>
            <ToggleBar setDisplayedPage = { setDisplayedPage }/>
            <FilterBar sportType = { sportType } setSportType = { setSportType } sportLevel ={ sportLevel } setSportLevel={ setSportLevel }/>
            { displayedPage === 1
            ? <Search postsData = { sortedPostsData } postDataStatus ={ postDataStatus } />
            : <Map postsData = { sortedPostsData } postDataStatus ={ postDataStatus } />
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
width: 100vw;
height: 100%;
`;

export default Home