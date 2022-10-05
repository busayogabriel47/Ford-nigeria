import React, { Component } from 'react';
import $ from 'jquery';


const GoFurther = () => {

   function categoryScroll(){
        $('html, body').animate({
                scrollTop: 900
              })
        }

    return(
        <div className='goFuther text-white text-center full-width mOff'>
        <div className="col-12 navigation-clearance">
      
            <h6 className="ford-font">Welcome to</h6>
            <h1 className='coscharisMotorsFont'>COSCHARIS MOTORS PLC.</h1>
            <hr className="divider"/>
            <h3 className="ford-font">OFFICIAL FORD REPRESENTATIVES</h3>

        </div>
        <div className="col-12">
               <button onClick={categoryScroll} className="btn btn-outline ford-font ford-outline-button"> 
                   Go further
               </button>
              
        </div>
     

        </div>

        
    )
}

export default GoFurther;