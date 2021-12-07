import React from "react";
import styled from "styled-components";
import SingleActivity from "../../acitivity-components/SingleActivity";

const ActivityPosted = () => {

    return(
        <Wrapper>
            <SingleActivity/>
            <SingleActivity/>
            <SingleActivity/>
            <SingleActivity/>
            <SingleActivity/>
            <SingleActivity/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
overflow: auto;
height: calc(100% - 35px);
z-index:0;
`;
export default ActivityPosted