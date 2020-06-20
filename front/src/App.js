import React, {useState} from 'react';
import './App.css';
import 'materialize-css'
import { Navbar, NavItem, Icon } from 'react-materialize';
import Searchbar from './components/Searchbar/Searchbar';
import Map from './components/Map/Map';


function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="App">
      <Navbar
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
        <Map />
      </div>
      <div className="other">
      a<br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      b
      </div>
    </div>
  );
}

export default App;
