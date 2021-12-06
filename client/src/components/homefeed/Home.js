import React, { useState } from "react";
import styled from "styled-components";
import ToggleBar from "./ToggleBar";
import Map from "./all-activities-map";
import Search from "./all-activities-search";
const Home = () => {

    const [ displayedPage, setDisplayedPage ] = useState(1);

    return(
        <Wrapper>
            <ToggleBar setDisplayedPage = { setDisplayedPage }/>
            { displayedPage === 1
            ? <Search/>
            : <Map/>
            }
        </Wrapper>
    );
}

const Wrapper = styled.div`
width: 100vw;
height: 100%;
`;

export default Home