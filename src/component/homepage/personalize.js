import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import escape from '../../assets/images/ford-personalize.jpg';



const Personalize = () => {

    return(
    <div className="row ford-font navigation-clearance mobile-margin-clearance full-width mOff">
          <div className="col-12 text-center pOff">

            <h1 className="ford-blue-text"> 
              Pick up where you left off
            </h1>
             
          </div>

      

          <div className="col-12 col-md-4 mx-auto ford-font text-white navigation-clearance mobile-margin-clearance standard-text-padding">
         
          <Card className="ford-font">
      <Card.Img variant="top" src={escape} />
      <Card.Body className="ford-blue-bg">
        <Card.Title className="text-left light-font-weight">2021</Card.Title>
        <Card.Text>
         <h4 className="text-left"> EDGE </h4>
         <h6 className="text-left light-font-weight">From N14,000,000</h6> 
         <Link class="nav-link nav-font-size text-right" to="/test-drive">
         <button className='btn btn-ford-blue-shadow ford-font ford-button-padding'>Test Drive</button>
         </Link>

        </Card.Text>
            </Card.Body>
            <div className="col-12 standard-section-margin text-center">
            <Link class="nav-link nav-font-size" to="/variants">
            <button className="btn btn-outline ford-font ford-outline-button-blue ford-button-padding-alt">Explore </button>
            </Link>
            </div>
    </Card>
         
          </div>

    </div>
 
  

        
    )
}

export default Personalize;