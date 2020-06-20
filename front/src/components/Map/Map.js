import React, {useState, useEffect} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import './Map.scss';

function MapViewer(props){
    return(
        <Map google={props.google} zoom={14}>
        </Map>
    )
}

function MapContainer(props) {
    // TODO: request for key

    const [map, setMap] = useState(null);
    useEffect(()=>{
        setMap(GoogleApiWrapper({
            apiKey: ('Key')
        })(MapViewer));
    }, [])

    return(
        <div className="Map">
            {map}
        </div>
    )
}

export default MapContainer;
