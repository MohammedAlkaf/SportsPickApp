import React from "react";
import styled from "styled-components";
import SingleActivity from "../acitivity-components/SingleActivity";
import CircularProgress from '@mui/material/CircularProgress';

const Search = ({postsData, postDataStatus}) => {

    if(postDataStatus === 'loading'){
        return (
            <CircleWrapper>
                <CircularProgress style={{'color': '#EE6C4D'}} />
            </CircleWrapper>)
    }

    return(
        <Wrapper>
            {
                postsData.map( (post) => {
                    return <SingleActivity post = {post}/>
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