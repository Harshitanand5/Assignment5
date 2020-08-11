import React from 'react';
import axios from 'axios';
import List from './List';
import './comman.css';
import Find from './Find';

class Corona extends React.Component{

    state={
        Country:[],
        Global:[],
        Search:[]
    }
    componentDidMount(){
        axios.get(' https://api.covid19api.com/summary').then(response=>{
            
           
            this.setState({
                Country:response.data.Countries,
                Global:response.data.Global
            })
           
        })

    }
    handleChange=(e)=>{
        this.setState({Search:e.target.value})}

    render(){
     const {Country,Search} = this.state
    const filteredCountries = Country.filter(data =>(
      data.Country.includes(Search)
    ))
        return(
            <div className="corona">
                <div className="global">
            <h3>Global</h3>
            <span><b>TotalConfirmed:{this.state.Global.TotalConfirmed}</b></span>
            <span><b>TotalDeaths:{this.state.Global.TotalDeaths}</b></span>
            <span><b>TotalRecovered:{this.state.Global.TotalRecovered}</b></span>
            </div>
                <Find handleChange={this.handleChange}/>
                <List Country={filteredCountries}  ></List>
            </div>
        )
    }
}
export default Corona;
