import React from 'react';
import './comman.css';
const Find=(props)=>{
    return(
        <input id="inp" type='search' className='search' placeholder="Enter Country Name" onChange = {props.handleChange} />
    )
}
export default Find;