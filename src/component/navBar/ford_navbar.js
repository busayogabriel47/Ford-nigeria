import fordlogo from '../../assets/images/Ford_logo.png';
import '../../component/navBar/navbar.css';
import { Close, MenuOutlined } from '@material-ui/icons';

import { Link, NavLink} from 'react-router-dom';
import { useState } from 'react';



const Navbar = () => {

const [isopen, setIsopen] = useState(false);

const showMenu = () => {
    setIsopen(!isopen);
}

    return ( 

        <>

        {/*--------------------Mobile-Navigation--------------------------*/}
            <nav className="bgBoxShadow d-block d-md-none fixed-top white-bg">
                        <div className='menu'>
                            <Link class="navbar-brand" exact to="/"><img src={fordlogo} width="40%"/></Link>
                            <div className='menu-icon'>
                                    <MenuOutlined className='menuClick' onClick={showMenu}/>
                            </div>

                        </div>


                        <div className={isopen ? 'slider active overflow-allow' : "slider"}>

                            <div className='closed'>
                                    <Close className="close" onClick={showMenu}/>
                            </div>
                            <ul className='ford-font ford-royal-blue-text navigation-clearance-democratic-banner full-width'>
                                <li>
                                <Link to="/variants" className='noDecor2' onClick={showMenu}>ALL VEHICLES</Link>
                                </li>
                                    <hr/>
                                <li>
                                <Link to="/variants" className='noDecor2' onClick={showMenu}>CARS</Link>
                                </li>
                                    <hr/>
                                <li>
                                <Link to="/variants" className='noDecor2' onClick={showMenu}>SUVS</Link>
                                </li>
                                    <hr/>
                                <li>
                                <Link to="/variants" className='noDecor2' onClick={showMenu}>TRUCKS & VANS</Link>
                                </li>
                                    <hr/>
                                <li>
                                <Link to="#" className='noDecor2' onClick={showMenu}>ASK CHARIS</Link>
                                </li>
                                    <hr/>
                                <li>
                                <Link to="/aftersales" className='noDecor2' onClick={showMenu}>AFTERSALES</Link>
                                </li>
                                    <hr/>
                                <li>
                                <Link to="/finance" className='noDecor2' onClick={showMenu}>FINANCE</Link>
                                </li>
                                    <hr/>
                                    <li>
                                <Link to="/trade-in" className='noDecor2' onClick={showMenu}>TRADE-IN</Link>
                                </li>
                                    <hr/>
                                <li>
                                <Link to="/Contact" className='noDecor2' onClick={showMenu}>CONTACT US </Link>
                                </li>
                                    <hr/>
                                <li>
                                <Link to="/latest-news" className='noDecor2' onClick={showMenu}>LATEST NEWS</Link>
                                </li>
                                    <hr/>
                                    <li>
                                <Link to="/aftersales#register" className='noDecor2' onClick={showMenu}> <button className='btn btn-ford-blue ford-font'>Register my Ford</button></Link>
                                </li>
                            </ul>

                           
                        </div>
                </nav>






        {/*-----------------------Desktop-Navigation---------------------------*/}
    
            <nav class="navbar navbar-expand-lg bgBoxShadow d-none d-md-block fixed-top white-bg">
                    <div class="container-fluid">
                        <Link class="navbar-brand" exact to="/"><img src={fordlogo} width="140px"/></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navHome" aria-controls="navHome" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navHome">
                        <ul class="col-12 navbar-nav text-center">
                            <li class="nav-item nav-menu-width">
                            <Link class="nav-link nav-font-size" to="/variants">ALL VEHICLES</Link>
                            </li>
                            <li class="nav-item nav-menu-width">
                            <Link class="nav-link nav-font-size" to="#">CARS</Link>
                            </li>
                            <li class="nav-item nav-menu-width">
                            <Link class="nav-link nav-font-size" to="#">SUVS</Link>
                            </li>
                            <li class="nav-item nav-menu-width">
                            <Link class="nav-link nav-font-size" to="#">TRUCKS & VANS</Link>
                            </li>
                            <li class="nav-item nav-menu-width">
                            <Link class="nav-link nav-font-size" to="#">ASK CHARIS</Link>
                            </li>
                            <li class="nav-item nav-menu-width">
                            <Link class="nav-link nav-font-size" to="/aftersales">AFTERSALES</Link>
                            </li>
                            <li class="nav-item nav-menu-width">
                            <Link class="nav-link nav-font-size" to="/trade-in">TRADE-IN</Link>
                            </li>
                            <li class="nav-item nav-menu-width">
                            <Link class="nav-link nav-font-size" to="/finance">FINANCE</Link>
                            </li>
                            <li class="nav-item nav-menu-width">
                            <Link class="nav-link nav-font-size" to="/latest-news">LATEST NEWS</Link>
                            </li>
                            <li class="nav-item nav-menu-width-alt">
                            
                        <Link class="nav-link nav-font-size text-right" to="/aftersales">
                            <button className='btn btn-ford-blue'>Register my Ford</button>
                            </Link>
                            </li>
                        </ul>

                        </div>
                    </div>
                </nav>
        </>
     );
}
 
export default Navbar;