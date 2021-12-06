import React,{ useState } from "react";
import styled from "styled-components";
import ToggleBar from "./ToggleBar";
import ActivityJoined from "./ActivitedJoined";
import ActivityPosted from "./ActivityPosted";
const Posts = () => {

    const [ displayedPage, setDisplayedPage ] = useState(1);

    return(
        <Wrapper>
            <ToggleBar setDisplayedPage = { setDisplayedPage }/>
            { displayedPage === 1
            ? <ActivityPosted/>
            : <ActivityJoined/>
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
`;

export default Posts