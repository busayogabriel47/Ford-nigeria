import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ecosport from '../../assets/images/ecosport.jpg'
import ecosportA from '../../assets/images/home-b.jpg'
import ecosportB from '../../assets/images/home-a.jpg'
import bronco from '../../assets/images/Bronco-Safari.jpg'
import mustang from '../../assets/images/mustang-cover.jpg'
import ecosportMob from '../../assets/images/mob-ecosport.jpg'
import mustangMob from '../../assets/images/mob-mustang.jpg'
import broncoMob from '../../assets/images/mob-bronco.jpg'

const BannerSlider = () => {

return (
    <>

<Carousel fade id="homepageslidedsk" className="carousel slide d-block d-sm-none"> 

<Carousel.Item>
    <img
      src={ecosportMob}
      alt="First slide"
      width='100%' 
    />
    <Carousel.Caption className="text-left">
    </Carousel.Caption>
  </Carousel.Item>
 

  <Carousel.Item>
    <img
      src={mustangMob}
      alt="First slide"
      width='100%' 
    />
    <Carousel.Caption className="text-left">
    </Carousel.Caption>
  </Carousel.Item>

  

  <Carousel.Item>

    <img
      src={broncoMob}
      alt="Second slide"
      width='100%'
    />

  </Carousel.Item>
  
</Carousel>

<Carousel fade id="homepageslidedsk" className="carousel slide navigation-clearance half-screen-view-1 d-none d-sm-block"> 

<Carousel.Item>
    <img
      src={ecosport}
      alt="First slide"
      width='100%' 
    />
    <Carousel.Caption className="text-left">
    </Carousel.Caption>
  </Carousel.Item>
 

  <Carousel.Item>
    <img
      src={ecosportB}
      alt="First slide"
      width='100%' 
    />
    <Carousel.Caption className="text-left">
    </Carousel.Caption>
  </Carousel.Item>

  

  <Carousel.Item>

    <img
      src={bronco}
      alt="Second slide"
      width='100%'
    />

  </Carousel.Item>

  <Carousel.Item>
    <img
      src={ecosportA}
      alt="First slide"
      width='100%' 
    />
    <Carousel.Caption className="text-left">
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
<img
  src={mustang}
  alt="Second slide"
  width='100%'
/>

</Carousel.Item>
  
</Carousel>
       
    </>
)
}

export default BannerSlider;