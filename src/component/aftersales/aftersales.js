import React, { useState, useEffect, Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import $ from 'jquery';
import Parts from './parts';
import Register from './register';
import aftersales from '../../assets/images/Ford-Aftersales-Banner.jpg';


const Aftersales = () => {

    window.scrollTo(0, 0)



    const getTabFromPathname = (pathname) => {
        switch (pathname) {
          case "http://localhost:3000/aftersales":
            return true;
          case "http://localhost:3000/aftersales#register":
            return true;
          case "http://localhost:3000/aftersales#parts":
            return false;
        }
      };

      useEffect(() => {

        if (getTabFromPathname(window.location.href) === true){
            let tabElementParts = document.getElementById('aftersales-tab-tab-parts')
            let tabElementRegister = document.getElementById('aftersales-tab-tab-register')
            $(tabElementRegister).addClass('active')
            $(tabElementParts).removeClass('active')
         }
    
         if (getTabFromPathname(window.location.href) === false){
          
            let tabElementParts = document.getElementById('aftersales-tab-tab-parts')
            let tabElementRegister = document.getElementById('aftersales-tab-tab-register')
            $(tabElementParts).addClass('active')
            $(tabElementRegister).removeClass('active')
           
         }
      
         if (getTabFromPathname(window.location.href) === null){
            return null
         }
   
      }, [])
  
       console.log(getTabFromPathname(window.location.href))


    return(
        
        <>
        <div className="forBlog navigation-clearance mobile-margin-clearance-banner">
                <h5 className='mOff'>Ford Owner Services </h5>
            </div>
      <div className="row ford-font full-width mOff">  
      <img src={aftersales} className="pOff" />
      </div>
     
     <div className='row ford-font full-width navigation-clearance-democratic-banner mROff'>

        <div className="col-12 standard-margin-bottom text-center">
        <h4 className="ford-royal-blue-text"> Get Started With Ford Owner Services Online Today </h4>
        </div>

        <div className="col-12">

        <Tabs
      defaultActiveKey="register"
      id="aftersales-tab"
      className="mb-3 col-12 col-md-5 mx-auto"
      justify
       >
      <Tab eventKey="register" title="Register my Ford" className="register-tab">
       <Register/>
      </Tab>
      <Tab eventKey="parts" title="Request Parts" className="parts-tab">
      <Parts/> 
      </Tab>
     
    </Tabs>
        </div>

       

     </div>

        </>
        
    )
}

export default Aftersales;