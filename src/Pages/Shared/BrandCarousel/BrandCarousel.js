
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand1 from '../../../Images/breaking-news1.webp'
import brand2 from '../../../Images/breaking-news2.jpg';
import brand3 from '../../../Images/breaking-news3.jpg';
import  './BrandCarousel.css';


function BrandCarousel () {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img 
          className="d-block w-100 brand-size "
          src={brand1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100  brand-size"
          src= {brand2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 brand-size"
          src= {brand3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BrandCarousel ;