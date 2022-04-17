import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ban1 from '../../../images/banner/ban1.png'
import ban2 from '../../../images/banner/ban2.png'
import ban3 from '../../../images/banner/ban3.png'

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}   >
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src={ban1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Work harder</h3>
            <p>To achive your goal make yourself able</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src={ban2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Fitnes Freak Man</h3>
            <p> Nothing can stop you except yourself</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="  d-block    w-100"
            src={ban3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3> Make yourself Strong</h3>
            <p>
              Be enough able to protect yourself from bad things.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;