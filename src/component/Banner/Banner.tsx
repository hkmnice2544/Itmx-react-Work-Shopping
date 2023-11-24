import React from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';

 
function Banner() {
    return (
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.indexlivingmall.com/media/mageplaza/bannerslider/banner/image/1/9/1920x775-gift_1.jpg"
              alt="First slide" height="500px"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.indexlivingmall.com/media/mageplaza/bannerslider/banner/image/d/t/dt-1920x775_57.jpg"
              alt="Second slide" height="500px"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.indexlivingmall.com/media/mageplaza/bannerslider/banner/image/d/t/dt_5.gif"
              alt="Third slide" height="500px"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  export default Banner;