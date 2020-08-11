import React from 'react';
import './comman.css';


const List=(props)=>{

    const list=props.Country.map(count=>{
        return(
 <div key={count.CountryCode} className="hello" >
     <img src={`https://www.countryflags.io/${count.CountryCode}/flat/64.png`}></img>
        <div>
        <h3>{count.Country}</h3>
            <span>TotalConfirmed:{count.TotalConfirmed}</span><br/>
            <span>TotalDeaths:{count.TotalDeaths}</span><br/>
            <span>TotalRecovered:{count.TotalRecovered}</span><br/>
        </div>
</div>
        )
    })
    return(
        <div className="list" >
            
            {list}
        </div>
    )
}
export default List;