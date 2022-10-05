import React, { Component } from 'react';
import sampleAd from '../../assets/images/sampleAD.jpg';



const democraticBanners = () => {

    return(
<>

 <div className="col-12 grey-strip-height ford-grey">

 </div>
 <div className="row ford-font navigation-clearance-democratic-banner full-width mOff text-padding-democratic-banner text-white advert-space-height" style={{backgroundImage:`url(${sampleAd})`, backgroundSize:"cover", backgroundPosition:"center"}}>
    
    
     <div className="col-12">
     <h2 className="light-font-weight ford-blue-text democratic-banner-text">Peak Every Terrain With The All New Everest </h2>

<button className="btn btn-outline btn-ford-blue"> 
               See Specifications
           </button>

     </div>
  

    </div>
 
    </>
 
 

        
    )
}

export default democraticBanners;