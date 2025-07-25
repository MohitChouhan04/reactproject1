import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/latesti.jpg'
import img2 from '../assets/2img.jpg'
const Services = () => {
  return <div className="services">
         <Carousel infiniteLoop autoPlay 
         showStatus={false} 
         showArrows={false} 
         showThumbs={false}
         interval={1000}
         showIndicators={false}>
            <div>
                <img src={img2} alt="item1" />
                <p className='legend'>full stack</p>
            </div>
             <div>
                <img src={img1} alt="item3" />
                <p className='legend'>peer-to-peer support</p>
            </div>
        </Carousel>
    </div>
  
}

export default Services