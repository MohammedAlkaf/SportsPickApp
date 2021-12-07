import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToggleBar from "./ToggleBar";
import Map from "./all-activities-map";
import Search from "./all-activities-search";
const Home = () => {

    const [ displayedPage, setDisplayedPage ] = useState(1);
    const [ postsData, setPostsData ] = useState([]);
    const [ postDataStatus, setPostDataStatus ] = useState('loading');

    useEffect(()=>{
        // get the data of all posts in the system
        fetch('/posts')
        .then(res=> res.json())
        .then(data => {
            setPostsData(data.posts); // Store all posts data in postsData state variable
            console.log(data.posts);
            setPostDataStatus('idle');
        })
    },[])

    return(
        <Wrapper>
            <ToggleBar setDisplayedPage = { setDisplayedPage }/>
            { displayedPage === 1
            ? <Search postsData = { postsData } postDataStatus ={ postDataStatus } />
            : <Map/>
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
width: 100vw;
height: 100%;
`;

export default Home