import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import BannerSlider from './bannerSlider';
import GoFurther from './Gofurther';
import Ahead from './ahead';
import Charis from './Charis';
import Personalize from './personalize';
import FinanceAd from './financeAd'; 
import Aftersales from './aftersales';
import DemocraticBanners from './democraticBanners';
import Footer from '../footer/footer';


import '../../component/homepage/homepage.css'





const Homepage = () => {

    window.scrollTo(0, 0)
return (
    <>
        <BannerSlider/>
        <GoFurther/>
        <Ahead/>
        <Charis/>
        <Personalize/>
        <FinanceAd/>
        <Aftersales/>
        <DemocraticBanners/>

        
      
    </>
)    

}

export default Homepage;