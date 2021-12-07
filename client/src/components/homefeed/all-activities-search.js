import React from "react";
import styled from "styled-components";
import SingleActivity from "../acitivity-components/SingleActivity";

const Search = ({postsData, postDataStatus}) => {

    if(postDataStatus === 'loading'){
        return(
            <div>
                loading
            </div>
        )
    }

    return(
        <Wrapper>
            {
                postsData.map( (post) => {
                    return <SingleActivity post = {post}/>
                })
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
overflow: auto;
height: 100%;
z-index:-100;
`;

export default Search