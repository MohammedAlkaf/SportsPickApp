import React from "react";
import styled from "styled-components";
import SingleActivity from "../../acitivity-components/SingleActivity";
const InfoWindowContent = ({selected})=> {
    return(
        <Wrapper>
            <SingleActivity post = {selected}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
`;

export default InfoWindowContent