import React from "react";
import styled from "styled-components";
import { FiSearch, FiMapPin } from "react-icons/fi";

const ToggleBar = () => {
    const [active, setActive] = useState('myProfile');

    let history = useHistory();

    const handleClick = (path) => {
        setActive(path);
        history.push(`/${path}`);
    }

    return(
        <Wrapper>
            <Button active = {active === 'homefeed'} onClick = {() => handleClick('homefeed')} >
                <FiSearch/>
            </Button>
            <Button>
                <FiMapPin active = {active === 'map'} onClick = {() => handleClick('map')}/>
            </Button>
        </Wrapper>
    );

};

const Button = styled.button`
    background-color: #3C4552;
    border-bottom: 7px solid #3C4552;
    width: 50%;

    ${({ active }) => active && ` border-bottom: 7px solid #EE6C4D; `}

`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    background-color: #3C4552;
    height:70px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export default ToggleBar