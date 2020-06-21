import React, {useState, useEffect} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import './Map.scss';


function MapContainer(props) {
    // TODO: request for key
    const stores = {};
    for(let i = 0; i < props.searchResults.length; i++){
        const r = props.searchResults[i];
        if(!stores[r.storeId]){
            stores[r.storeId] = {
                "storeId":  r.storeId,
                "address" : r.address ,
                "lat":r.lat,
                "long":r.long,
                "maskType" : [r.maskType],
                "quantity": [r.quantity]
            }
        }
        else {
            stores[r.storeId].maskType.push(r.maskType);
            stores[r.storeId].quantity.push(r.quantity);
        }
    }



    return(
        <div className="Map">
            <Map style= {{
                width: '100%',
                height: '80vh'
                }}
                google={props.google} zoom={14}
                initialCenter={props.location!=null?{lat:props.location.latitude, lng:props.location.longitude}: null}>
                {
                    props.location!=null?(
                        <Marker title={'Your location'}
                            name={'YOU'}
                            position={{lat: props.location.latitude, lng: props.location.longitude}} />
                    ):<></>
                }
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
            apiKey: ('')
        })(MapContainer);
