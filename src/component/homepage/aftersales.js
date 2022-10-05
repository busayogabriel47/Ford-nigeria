import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import aftersales from '../../assets/images/aftersales.jpg';



const Aftersales = () => {

    return(
      <div className="row ford-font full-width mOff standard-text-padding-alt text-white" style={{backgroundImage: `url(${aftersales})`, backgroundSize:"cover", backgroundPosition:"center"}}>
    
      <h2> Explore Ford Owner Services  </h2>
  
      <p className="light-font-weight">
        Every Ford comes with a 4year or 100,000km free maintainance plan. You can access this by visiting any 
        of our service centers. Register your Ford to get exclusive access to loyalty offers or just request for 
        genuine Ford motor parts for your next repair    
      </p>
  
    <Link to="/aftersales" className='text-right'>
    <button className="btn btn-outline ford-font ford-outline-button"> 
                    Learn More
                 </button>
    </Link>
   


   
  
      </div>
 
  

        
    )
}

export default Aftersales;