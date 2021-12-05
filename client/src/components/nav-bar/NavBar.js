import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { FiUser, FiMessageCircle, FiSearch, FiPlusCircle } from "react-icons/fi";

const NavBar = () => {

    const [active, setActive] = useState('myProfile');

    let history = useHistory();

    const handleClick = (path) => {
        setActive(path);
        history.push(`/${path}`);
    }
    return(
        <Wrapper>
            <Button active = {active === 'myProfile'} onClick = {() => handleClick('myProfile')}>
                <FiUser size = {45} color = {'EE6C4D'}/>
            </Button>
            <Button active = {active === 'group-chats'} onClick = {() => handleClick('group-chats')}>
                <FiMessageCircle size = {45} color = {'EE6C4D'}/>
            </Button>
            <Button active = {active === 'create-acitvity'} onClick = {() => handleClick('create-acitvity')}>
                <FiPlusCircle size = {45} color = {'EE6C4D'}/>
            </Button>
            <Button active = {active === 'search'} onClick = {() => handleClick('search')}>
                <FiSearch size = {45} color = {'EE6C4D'}/>
            </Button>
        </Wrapper>
    );

}


const Button = styled.button`
    background-color: #3C4552;
    border-bottom: 7px solid #3C4552;
    width: 25%;

    ${({ active }) => active && ` border-bottom: 7px solid #EE6C4D; `}

`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #3C4552;
    height:70px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export default NavBar