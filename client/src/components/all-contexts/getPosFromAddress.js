// ***************************************************************************************
// This context is used to obtain an address position ( coordinates ) using Google Map API
// resource: https://www.npmjs.com/package/react-geocode
// ***************************************************************************************
import Geocode from "react-geocode";
import React, { useContext } from "react";
export const activityPosContext = createContext(null);

export const activityPosProvider = ({ children }) => {
    
}
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyA86Qyi8S6qwBe1hAaEwsDkHQ21pdMwaBk");

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

