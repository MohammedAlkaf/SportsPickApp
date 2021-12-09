import React,{ useState } from "react";
import styled from "styled-components";
import ToggleBar from "./ToggleBar";
import ActivityJoined from "./ActivitedJoined";
import ActivityPosted from "./ActivityPosted";
const Posts = ({ profileData }) => {

    const [ displayedPage, setDisplayedPage ] = useState(1);
    
    return(
        <Wrapper>
            <ToggleBar setDisplayedPage = { setDisplayedPage }/>
            { displayedPage === 1
            ? <ActivityPosted profileData = { profileData }/>
            : <ActivityJoined profileData = { profileData }/>
            }
            <br/>
            <br/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
height: 50%;
z-index: 0;
`;

export default Posts