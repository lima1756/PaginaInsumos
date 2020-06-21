import React, {useState} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import axios from 'axios';

import './Map.scss';

let key = "";
axios.get(`/mapspoint`)
.then(res => {
    key = res.data.key;
}).catch(ex => {
    console.log(ex);
})

function MapContainer(props) {
    return(
        <div className="Map">
            <Map style= {{
                    width: '100%',
                    height: '80vh'
                    }}
                containerStyle = {{
                    position: 'relative',
                    width: '100%',
                    height: '80vh'
                    }
                }
                google={props.google}
                zoom={14}
                initialCenter={props.location!=null?{lat:props.location.latitude, lng:props.location.longitude}: {lat:0, lng:0}}
                onClick={props.onMapClicked}
            >
                {props.children}
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
            apiKey: (key)
        })(MapContainer);
