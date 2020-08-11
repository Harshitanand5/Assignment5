import React from 'react';
import './comman.css';
import {Link} from 'react-router-dom';

const Navbar=()=>{
return(<><nav>
    <div className="nav-wrapper  ">
      <ul id="nav-mobile" className="right hide-down">
        <li><Link to="/"><b>Home</b></Link></li>
        <li><Link to="/Corona"><b>Corona</b></Link></li>
        <li><Link to="/Weather"><b>Weather</b></Link></li>
      </ul>
    </div>
  </nav></>)}
export default Navbar;