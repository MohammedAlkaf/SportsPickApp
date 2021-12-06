import React,{ useState } from "react";
import styled from "styled-components";

const ToggleBar = ({ setDisplayedPage }) => {

    const [active, setActive] = useState(1);

    const handleClick = (page) => {
        setActive(page);
        setDisplayedPage(page);
    }

    return(
        <Wrapper>
            <Button active = {active === 2} onClick = {() => handleClick(2)} >
                Joined Activties
            </Button>
            <Button active = {active === 1} onClick = {() => handleClick(1)} >
                Posted Activities
            </Button>
        </Wrapper>
    );

};

const Button = styled.button`
    background-color: #3C4552;
    border-bottom: 7px solid #3C4552;
    width: 50%;
    color: #EE6C4D;
    font-size: 1.02em;

    ${({ active }) => active && ` border-bottom: 7px solid #EE6C4D; `}

`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    background-color: #3C4552;
    height:35px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export default ToggleBar