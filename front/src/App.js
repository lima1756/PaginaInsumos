import React, {useState, useEffect} from 'react';
import './App.css';
import 'materialize-css'
import { Navbar, NavItem, Icon, Table } from 'react-materialize';
import Searchbar from './components/Searchbar/Searchbar';
import Map from './components/Map/Map';
import { geolocated } from "react-geolocated";
import '../node_modules/materialize-css/dist/css/materialize.min.css'


function App(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  //TODO: removed mocked data
  useEffect(()=>{
    setSearchResults([
      {"storeId": 1 , "address" : "direccion 1" , "lat":"-34.79498", "long":"145.62293", "maskType" : 1, "quantity": 20 },
      {"storeId": 2 , "address" : "direccion 2" , "lat":"21.47796", "long":"-13.67654", "maskType" : 2, "quantity": 10 },
      {"storeId": 1 , "address" : "direccion 1" , "lat":"-34.79498", "long":"145.62293", "maskType" : 3, "quantity": 15 },
      {"storeId": 3 , "address" : "direccion 3" , "lat":"54.61783", "long":"82.25302", "maskType" : 4, "quantity": 8 },
    ])
  }, []);

  if(!props.isGeolocationAvailable || !props.isGeolocationEnabled){
    // TODO: request location
  }


  const onPlaceClick = (props, marker, e) => {
    // setState({
    //   selectedPlace: props,
    //   activeMarker: marker,
    //   showingInfoWindow: true
    // });
  }

  const onMapClicked = (props) => {
    // if state.showingInfoWindow
    if (false) {
      // setState({
      //   showingInfoWindow: false,
      //   activeMarker: null
      // })
    }
  };

  return (
    <div className="App">
      <Navbar
        className="navbar"
        alignLinks="right"
        brand={<a className="brand-logo" href="#">Logo</a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <NavItem href="">
          Getting started
        </NavItem>
        <NavItem href="components.html">
          Components
        </NavItem>
      </Navbar>
      <div className="MapContainer">
        <Searchbar setSearchValue={setSearchValue} searchValue={searchValue}/>
        <Map location={props.coords} searchResults={searchResults}/>
      </div>
      <div className="results">
        <Table>
          <thead>
            <tr>
              <th data-field="id">
                Location
              </th>
              <th data-field="name">
                Mask Type
              </th>
              <th data-field="price">
                Qty
              </th>
            </tr>
          </thead>
          <tbody>
            { searchResults.map((row)=>(
              <tr>
                <td>
                  {row.address}
                </td>
                <td>
                  {row.maskType}
                </td>
                <td>
                  {row.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>
    </div>
  );
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(App);
