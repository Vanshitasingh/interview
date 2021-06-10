import React from 'react';
import Linkify from 'react-linkify';
import { Link as DomLink } from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return <nav  className="navbar navbar-expand-lg navbar-light bg-light">
    <a  className="navbar-brand" href="#">Navbar</a>
    <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
  
    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul  className="navbar-nav mr-auto">
        <li  className="nav-item active">
        <Linkify><DomLink to='/'  className="nav-link" >Table</DomLink></Linkify>
        </li>
        <li  className="nav-item">
            <Linkify><DomLink to='/chart'  className="nav-link">Chart</DomLink></Linkify>
        </li>
        </ul>
        </div>
</nav>
    
}

export default Navbar;