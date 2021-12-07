import React from "react";
import styled from "styled-components";
import SingleActivity from "../acitivity-components/SingleActivity";


const Search = () => {

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
height: 100%;
z-index:-100;
`;

export default Search