/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
const googleMapsApiKeys = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""
const libraries: ['places'] = ['places'];
const mapContainerStyle: React.CSSProperties = {
    width: '25vw',
    height: '35vh',
};
const center: google.maps.LatLngLiteral = {
    lat: 27.61116, // default latitude
    lng: 83.47279, // default longitude
};

const junkriMap: React.FC = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: googleMapsApiKeys,
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
};

export default junkriMap;
