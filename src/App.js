import React, { Component } from 'react';
import Corona from'./Component/Corona';
import Weather from'./Component/Weather';
import Navbar from'./Component/Navbar';
import Home from'./Component/Home';
import { BrowserRouter,Route } from 'react-router-dom';
 class App extends Component
 {
   render(){
    return(
      <BrowserRouter>
      <div>
          <Navbar/>
          <Route exact path='/' component={Home}></Route>
          <Route path='/Corona' component={Corona}></Route>
          <Route path='/Weather' component={Weather}></Route>
       </div>
      </BrowserRouter>
      
   )
   }
 }


export default App;
