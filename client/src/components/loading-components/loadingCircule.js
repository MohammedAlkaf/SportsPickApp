import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { ImSpinner9 } from "react-icons/im";
//****************************************************************
// This is loading icon for the buttons only
//****************************************************************

const LoadingCircule = () => {
    return (
        <Wrapper>
            <div>
                <ImSpinner9 size={30} />
            </div>
        </Wrapper>
    )
}

const rotateCenter = keyframes`
    0% {
      -webkit-transform: rotate(0);
              transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid black;

    div{
        width: 30px;
        height: 30px; /* as the half of the width */
        animation: ${rotateCenter} 1s linear infinite both;
    }
`;

export default LoadingCircule