import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

const AddressSearchBox = ( { postForm, setPostForm }) => {

    const [address, setaddress] = useState(null);
    
    useEffect( ()=> {

        if( address !== null) {
            geocodeByAddress(address.label)
            .then(results => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                console.log('Successfully got latitude and longitude', { lat, lng });
                setPostForm({
                    ...postForm,
                    activityAddress:{
                        ...postForm.activityAddress,
                        street:address.value.terms[0].value + ' ' + address.value.terms[1].value,
                        city:address.value.terms[2].value,
                        province:address.value.terms[3].value,
                        coordinates: { lat, lng }
                    }
                });
            }
            );
        }

    },[address])

    console.log(address);

    return (
        <Wrapper>
            <GooglePlacesAutocomplete
                apiKey = {process.env.REACT_APP_GOOGLE_MAP_API_KAY}
                selectProps={{
                    address,
                    onChange: setaddress,
                }}
            />
        </Wrapper>
    );

}

const Wrapper = styled.div`
color: black;
`;
export default AddressSearchBox