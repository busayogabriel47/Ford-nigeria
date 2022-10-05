import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import financeImage from '../../assets/images/ford-finace.jpg';



const financeAd = () => {

    return(
    <div className="row ford-font navigation-clearance full-width mOff standard-text-padding-alt text-white mobile-margin-clearance" style={{backgroundImage:`url(${financeImage})`, backgroundSize:"cover", backgroundPosition:"center"}}>
    
    <h2> Apply For Ford Finance </h2>

    <p className="light-font-weight">
       You can access up to 60months worth of runway to pay off your brand new Ford. All you 
       require is a quote from our dealership and an introduction to one of our finance parteners
       who are eager to support you through your purchase cycle.       
    </p>

    <Link to="/finance" className='text-right'>
    <button className="btn btn-outline ford-font ford-outline-button"> 
                   Learn More
               </button>
              
    </Link>
   

    </div>
 
  

        
    )
}

export default financeAd;