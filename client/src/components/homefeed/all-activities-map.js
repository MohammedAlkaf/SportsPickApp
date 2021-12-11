import React, { useCallback, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "./map-management/mapStyles";
import InfoWindowContent from "./map-management/InfoWindowContent";
import orangeMarker from '../assests/orangeMarker.png';
import CurrentLocationButton from "./map-management/currentLocation";

const Map = ({ postsData, postDataStatus }) => {
    const [selected, setSelected] = useState(null);

    // import the places libraries
    const libraries = ["places"];

    // To avoid map re-rendering
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback( ({ lat, lng })=>{
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(11);
    },[])

    // Apply some styles to the map
    const options = {
        styles: mapStyles,
        disableDefaultUI: true,
        zoomControl: true,
    };

    // Set the width and height of the map component
    const mapContainerStyle = {
        width: "100%",
        height: "100%",
    };

    // Specify the center of the map when the map loads
    const center = {
        lat: 45.508888,
        lng: -73.561668,
    };

    

    // Provide the api key for using Google maps and  libraries
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        libraries,
    });

    if (loadError) return <div>Error loading Maps</div>;
    if (!isLoaded) return <div>Loading Maps</div>;

    return (
        <Wrapper>
            <Title>SportsPickApp</Title>
            <CurrentLocationButton panTo = { panTo }/>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={11}
                center={center}
                options={options}
                onLoad={onMapLoad}
            >
                {postDataStatus !== "loading" && (
                    <>
                        {postsData.map((post) => {
                            return (
                                <Marker
                                    key={post._id}
                                    position={{
                                        lat: post.activityAddress.coordinates?.lat,
                                        lng: post.activityAddress.coordinates?.lng,
                                    }}
                                    icon = {{
                                        url: orangeMarker,
                                        scaledSize: new window.google.maps.Size(35,50)
                                    }}
                                    onClick={() => {
                                        setSelected(post);
                                    }}
                                />
                            );
                        })}
                    </>
                )}

                {selected ?
                    <InfoWindow 
                        position={{
                            lat: selected.activityAddress.coordinates?.lat,
                            lng: selected.activityAddress.coordinates?.lng,
                        }}
                        onCloseClick = {()=> setSelected(null)}
                    >
                        <InfoWindowContent selected= {selected} />
                    </InfoWindow>
                : 
                    null
                }
            </GoogleMap>
        </Wrapper>
    );
};

const PuffInCenter = keyframes`
    0% {
        -webkit-transform: scale(2);
                transform: scale(2);
        -webkit-filter: blur(4px);
                filter: blur(4px);
        opacity: 0;
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-filter: blur(0px);
                filter: blur(0px);
        opacity: 1;
    }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  animation: ${PuffInCenter} 0.4s both;
`;

const Title = styled.h1`
  position: absolute;
  padding: 10px;
  font-size: 1.3em;
  margin: 5px;
  z-index: 5;
  color: #293241;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export default Map;
