import React, { Component } from 'react';
import '../blog/blog.css';
import blog1 from '../../assets/images/blog1.png';
import geepFord from '../../assets/images/geepford.png';




const FordBlog = () => {

    window.scrollTo(0, 0)

    return (
        <>
            <div className="forBlog mobile-margin-clearance-banner">
                <h5 className='mOff'>Ford Blog</h5>
            </div>
            <div className="newsHeading text-center">
                <p>The Home Ford News and stories. From car launches to finance plans and aftersales offerings.
                    All the performance thrills you need
                </p>
            </div>

            <div className='container'>
                <div className='row mb-5 blogContent'>
                    <div className='col-12 col-md-6'>
                        <img src={blog1} alt="blogimage" width="100%"/>
                    </div>

                    <div className='col-12 col-md-6'>
                        <p>June 1, 2022</p>
                        <h2>Ford introduce Bronco to the Nigeria market</h2>  
                        <p>Finding a parking space and then manoeuving into one can be a headache! 
                            Especailly with some spaces not much wider than vechicle itself: 
                            often it doesnt leave much room for getting in and out without risking damage to the doors
                        </p>

                        <a href="/single" className="noDecor2">Read More <i class="fa-solid fa-angle-right"></i></a> 
                    </div>
                </div>


                <div className='row mb-5 blogContent readMore'>
                    <div className='col-12 col-md-6'>
                        <img src={geepFord} alt="blogimage" width="100%"/>
                    </div>

                    <div className='col-12 col-md-6'>
                        <p>April 3, 2022</p>
                        <h2>Ford offers unbeatable discount on the Mustang</h2>  
                        <p>Finding a parking space and then manoeuving into one can be a headache! 
                            Especailly with some spaces not much wider than vechicle itself: 
                            often it doesnt leave much room for getting in and out without risking damage to the doors
                        </p>

                        <a href="/single" className="noDecor2">Read More <i class="fa-solid fa-angle-right"></i></a> 
                    </div>
                </div>

                <div>
                    
                </div>
            </div>
        </>
    )
}


export default FordBlog;