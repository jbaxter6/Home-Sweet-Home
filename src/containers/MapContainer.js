import React, { useState, useRef, useCallback } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

const MAPBOX_TOKEN =
    "pk.eyJ1IjoiamJheHRlcjYiLCJhIjoiY2tlcnNya2o3MHh4ejJ5bXJ4bGNicmw1bSJ9.CsaNb9xr-nkK-T4I3XxhPA";

const MapContainer = (props) => {
    const [viewport, setViewport] = useState({
        latitude: 39.8097,
        longitude: -98.5556,
        zoom: 2.7129519032310196
    });


    const mapRef = useRef();
    const inputValue = `${props.street} ${props.city}, ${props.state} ${props.zip}, United States`

    console.log(mapRef)

    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );


    const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 };

        return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
        });
        },
        [handleViewportChange]
    );

    return (
        <div style={{ height: "40vh" }}>
            <MapGL
            ref={mapRef}
            {...viewport}
            width="100%"
            height="100%"
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            >
            <Geocoder
            inputValue={inputValue}
            mapRef={mapRef}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            position="top-left"
            />
            </MapGL>
        </div>
    );
};

export default MapContainer