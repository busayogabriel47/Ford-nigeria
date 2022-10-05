import React, { Component } from 'react';
import recommenderImage from '../../assets/images/recommenderImage.jpg';



const Charis = () => {

    return(
    <div className="row ford-royal-blue-bg full-width mOff">
          <div className="col-12 grey-strip-height ford-grey navigation-clearance mobile-margin-clearance">

          </div>

          <div className="col-12 col-md-8 pOff"> 

          <img src={recommenderImage} className="img-fluid" />

          </div>

          <div className="col-12 col-md-4 ford-font text-white navigation-clearance mobile-margin-clearance standard-text-padding">
         
           <h6 className='light-font-weight'>Need help selecting your Ford ?</h6>
           <h3> JUST ASK CHARIS</h3> 
           <p className='ahead-text-size light-font-weight'> 
               We understand how important it is to choose the right Ford
               for you. Our recommendation tool can help you get a tailored 
               fit for your exact needs.
           </p>

           <button className="btn btn-outline ford-font ford-outline-button ford-button-padding-alt standard-margin-bottom"> 
                   Get Started
               </button>

          </div>
          <div className="col-12 grey-strip-height ford-grey">

</div>

    </div>
 
  

        
    )
}

export default Charis;