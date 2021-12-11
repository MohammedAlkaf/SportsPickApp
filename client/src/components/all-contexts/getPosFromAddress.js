// ***************************************************************************************
// This context is used to obtain an address position ( coordinates ) using Google Map API
// resource: https://www.npmjs.com/package/react-geocode
// ***************************************************************************************
import Geocode from "react-geocode";
import React, { useContext } from "react";
export const activityPosContext = createContext(null);

export const activityPosProvider = ({ children }) => {
    
}

console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY);

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAP_API_KEY);

// set response language. Defaults to english.
Geocode.setLanguage("en");

// Get latitude & longitude from address.
Geocode.fromAddress("Eiffel Tower").then(
    (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
    },
    (error) => {
        console.error(error);
    }
);

