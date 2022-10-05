import React, { Component } from 'react';
import figoRed from '../../assets/images/figo.png'


const ahead = () => {

    return(
        <div className='row pOff full-width mOff navigation-clearance mobile-margin-clearance'>
        <div className="col-12 col-md-5 navigation-clearance mobile-margin-clearance standard-text-padding">
      
         <h3 className="ford-royal-blue-text ford-font"> Let's Ford Ahead Together </h3>
         <p className="ford-blue-font ford-font ahead-text-size light-font-weight">
         Whether it's your first car, a vehicle to help you achieve more professionally or 
         just one to help you express yourself. Taking the lead has never been easier with 
         Coscharis Ford Motors.   
         </p>
         <button className='btn btn-ford-blue ford-font ford-button-padding'>See Our Range</button>


        </div>
        <div className="col-12 col-md-7 pOff">
        <img src={figoRed} className="img-fluid figo-arrangement" /> 
              
        </div>
     
        </div>

        
    )
}

export default ahead;