import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { CurrentUserContext } from "../all-contexts/currentUserContext";
import { FiUser, FiMessageCircle, FiHome, FiPlusCircle } from "react-icons/fi";

const NavBar = () => {

    const [active, setActive] = useState(1);
    const { currentUser } = useContext(CurrentUserContext)
    let history = useHistory();

    const handleClick = (tabId,path) => {
        setActive(tabId);
        history.push(`/${path}`);
    }
    
    return(
        <Wrapper>
            <Button active = {active === 1} onClick = {() => handleClick(1,`profile/${currentUser?._id}`)}>
                <FiUser size = {45} color = {'EE6C4D'}/>
            </Button>
            <Button active = {active === 2} onClick = {() => handleClick(2,'group-chats')}>
                <FiMessageCircle size = {45} color = {'EE6C4D'}/>
            </Button>
            <Button active = {active === 3} onClick = {() => handleClick(3,'create-acitvity')}>
                <FiPlusCircle size = {45} color = {'EE6C4D'}/>
            </Button>
            <Button active = {active === 4} onClick = {() => handleClick(4,'home')}>
                <FiHome size = {45} color = {'EE6C4D'}/>
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
    flex-direction: row-reverse;
    background-color: #3C4552;
    height:70px;
    z-index: 5;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;    
`;

export default NavBar