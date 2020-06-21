import React, {useState, useEffect} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import './Map.scss';


function MapContainer(props) {
    // TODO: request for key
    return(
        <div className="Map">
            <Map style= {{
  width: '100%',
  height: '80vh'
}} google={props.google} zoom={14}>
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
            apiKey: ('')
        })(MapContainer);
