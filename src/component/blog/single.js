import React, { Component } from 'react';
import blog1 from '../../assets/images/blog1.png';
import '../../component/blog/blog.css';
import ford from '../../assets/images/ford.png'
import { Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';



const SingleBlog = () => {

    window.scrollTo(0, 0)

    return(
        <>
            <div className='container navigation-clearance mobile-margin-clearance-banner'>
                <div className='row'>
                    <div className='col-12'>
                        <img src={blog1} width="100%" alt='single-post'/>

                        <div className='mt-5 mb-5 blogParagraph'>
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                            </p>


                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis 
                            </p>
                        </div>
                    </div>

                    <div className='col-12'>

                    </div>
                </div>
            </div>

{/*------Next Article section--------------------*/}
            <div className='nextArticle mb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6 articleCol' id="rightBorder">
                            <h3>Ford Offer Customers unbeatable discount on the Mustang</h3>
                        </div>
                        <div className='col-12 col-md-6 articleCol'>
                            <h3>Ford Offer Customers unbeatable discount on the Mustang</h3>
                        </div>

                        {/*-------------Related-article---section-------------*/}
                            <div className='col-12 mt-5'>
                                <div className='row'>
                                <Card className="ford-font pOff standard-margin-top-bottom">
      <Card.Img variant="top" src={ford} className="pOff" />
      <Card.Body>
        <Card.Title className="text-center">Ford unveils Edge at the Abuja Motor Fair</Card.Title>
        <Card.Text>
         <p className="text-center ford-font ford-grey-text"> The company promises to delight her numerous customers with special
                                                    promotional offers. The highpoint of the motor fair will be unveiling of 
                                                    a new Ford Variant. EDGE into the Nigeria market.
                                                    </p>
        </Card.Text>
            </Card.Body>
            <div className="col-12 standard-section-margin text-center">
            <Link class="noDecor2" to="#">
            <h5 className="ford-font ford-royal-blue-text noDecor2">Read More </h5>
            </Link>
            </div>
    </Card>

    <Card className="ford-font pOff standard-margin-top-bottom">
      <Card.Img variant="top" src={ford} className="pOff" />
      <Card.Body>
        <Card.Title className="text-center">Ford unveils Edge at the Abuja Motor Fair</Card.Title>
        <Card.Text>
         <p className="text-center ford-font ford-grey-text"> The company promises to delight her numerous customers with special
                                                    promotional offers. The highpoint of the motor fair will be unveiling of 
                                                    a new Ford Variant. EDGE into the Nigeria market.
                                                    </p>
        </Card.Text>
            </Card.Body>
            <div className="col-12 standard-section-margin text-center">
            <Link class="noDecor2" to="#">
            <h5 className="ford-font ford-royal-blue-text noDecor2">Read More </h5>
            </Link>
            </div>
    </Card>


    <Card className="ford-font pOff standard-margin-top-bottom">
      <Card.Img variant="top" src={ford} className="pOff" />
      <Card.Body>
        <Card.Title className="text-center">Ford unveils Edge at the Abuja Motor Fair</Card.Title>
        <Card.Text>
         <p className="text-center ford-font ford-grey-text"> The company promises to delight her numerous customers with special
                                                    promotional offers. The highpoint of the motor fair will be unveiling of 
                                                    a new Ford Variant. EDGE into the Nigeria market.
                                                    </p>
        </Card.Text>
            </Card.Body>
            <div className="col-12 standard-section-margin text-center">
            <Link class="noDecor2" to="#">
            <h5 className="ford-font ford-royal-blue-text noDecor2">Read More </h5>
            </Link>
            </div>
    </Card>



    <Card className="ford-font pOff standard-margin-top-bottom">
      <Card.Img variant="top" src={ford} className="pOff" />
      <Card.Body>
        <Card.Title className="text-center">Ford unveils Edge at the Abuja Motor Fair</Card.Title>
        <Card.Text>
         <p className="text-center ford-font ford-grey-text"> The company promises to delight her numerous customers with special
                                                    promotional offers. The highpoint of the motor fair will be unveiling of 
                                                    a new Ford Variant. EDGE into the Nigeria market.
                                                    </p>
        </Card.Text>
            </Card.Body>
            <div className="col-12 standard-section-margin text-center">
            <Link class="noDecor2" to="#">
            <h5 className="ford-font ford-royal-blue-text noDecor2">Read More </h5>
            </Link>
            </div>
    </Card>

                                </div>
                            </div>
                    </div>
                </div>
            </div>
        
        </>

    )
}

export default SingleBlog;