import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import '../footer/footer.css'
import youtube from '../../assets/images/youtube.png';
import cglogo from '../../assets/images/cglogo.png'


const Footer = () => {
    return (
        <>

        <div className='ford-footer'>
            <div className='blueBg'></div>
                <div className='container standard-padding-top'>
                    <div className='row text-white full-width'>
                        <div className='col-12 col-md-5 FMargin'>
                            <h4 className="ford-font">OUR RANGE OF VEHICLES</h4>
                            <ul className="ford-font light-font-weight">
                                    <li>Ford Figo</li>
                                    <li>Ford EcoSport</li>
                                    <li>Ford Edge</li>
                                    <li>Ford Territory </li>
                                    <li>Ford Everest</li>
                                    <li>Ford Explorer</li>
                                    <li>Ford Bronco</li>
                                    <li>Ford Ranger</li>
                                    <li>Ford F150</li>
                                    <li>Ford Transit</li>
                                </ul>
                        </div>
                        <div className='col-12 col-md-5 FMargin'>
                            <Link className='noDecor' to="/contact">
                            <h4>Visit Ford Nigeria</h4> 
                            </Link>
                          
                                <ul className="ford-font light-font-weight">
                             
                                    <li>Lagos </li> 
                               
                                    <li>Ibadan </li> 
                               
                                    <li>Abuja </li> 
                          
                                    <li>Port Harcourt</li> 
                             
                                    <li>Uyo</li> 
                              
                                    <li>Kano</li> 
                              
                                    <li>Calabar</li> 
                             
                                    <li>Enugu</li> 
                                </ul>
                        </div>
                        <div className='col-12 col-md-2 FMargin'>
                                <h4>Customer Services</h4> 
                                <ul className="ford-font light-font-weight">
                                    <li>Ask CHARIS</li>
                                    <Link to="/aftersales#register" className="noDecor">
                                    <li>Register your Ford</li>
                                    </Link>
                                    <Link to="/aftersales#parts" className="noDecor">
                                    <li>Request Parts</li>
                                        </Link> 
                                    <Link to="/test-drive" className="noDecor">
                                        <li>Test-Drive</li>
                                    </Link>
                                    <Link to="/contact" className="noDecor">
                                    <li>Contact us</li>
                                    </Link>
                                    <Link to="/latest-news" className="noDecor">
                                    <li>Latest news</li>
                                    </Link>       
                                </ul>
                        </div>
                    </div>
                </div>
                <div className='getUpdates'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-4 mt-5 mb-5'>
                                <span><i class="fa-solid fa-envelope"></i> <a href='#' className='envelop'>Get Updates</a></span> 
                            </div>

                            <div className='col-12 text-center col-md-4 mt-5 mb-5'>
                            <img src={cglogo} width="230px"/>
                             </div>


                            <div className='col-12 col-md-4 followFord mt-5 mb-5'>
                                <span> <small>Follow Ford</small> &nbsp;
                                    <i class="fa-brands fa-facebook-square"></i>
                                    <i class="fa-brands fa-twitter-square"></i>
                                    <i class="fa-brands fa-youtube-square"></i>
                                    <i class="fa-brands fa-instagram-square"></i>
                                </span>
                                
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-9' id='siteMap'>
                                <span><a href='#'>&copy; 2022 Ford Motor Company</a></span>&nbsp;&nbsp;
                                <span><a href='#'>Site Map</a></span>&nbsp;&nbsp;
                                <span><a href='#'>Glossary</a></span>&nbsp;&nbsp;
                                <span><a href='#'>Contact Us</a></span>&nbsp;&nbsp;
                                <span><a href='#'>Accessibility</a></span>&nbsp;&nbsp;
                                <span><a href='#'>Terms & Conditions</a></span>&nbsp;&nbsp;
                                <span><a href='#'>Privacy</a></span>&nbsp;&nbsp;
                                <span><a href='#'>Cookie Settings</a></span>&nbsp;&nbsp;
                                <span><a href='#'>Your CA Privacy Rights</a></span> &nbsp;&nbsp;
                            </div>

                              <div className='col-12 col-md-3'>
                                <h6 className='ford-font ford-blue-text signature'>Web design and content by iNspire</h6>
                              </div>
                        </div>

                </div>
                </div>
            </div>


        </>
    )
}

export default Footer