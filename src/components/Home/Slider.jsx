import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import sliderimg from '../../images/slider1.png';
import slider4 from '../../images/slider4.png';
import prod4 from '../../images/prod4.png';
import prod3 from '../../images/prod3.png';

const Slider = () => {
    const [index, setIndex] = useState(3);
    const handleSelect = (selectIndex) => {
        setIndex(selectIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='mx-auto'>
            <Carousel.Item className="slider-background" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center  ">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={slider4}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title mx-5"> هناك خصم كبير </h3>
                        <p className="slider-text mx-5">خصم يصل 50% عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="slider-background2" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "373.53px" }}
                        className=""
                        src={sliderimg}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title me-5">هناك خصم كبير</h3>
                        <p className="slider-text me-5">خصم يصل 50% عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background3" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "373.53px" }}
                        className=""
                        src={prod3}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title me-5">هناك خصم كبير</h3>
                        <p className="slider-text me-5">خصم يصل 50% عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background4" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "373.53px" }}
                        className=""
                        src={prod4}
                        alt="First slide"
                    />
                    <div>
                        <h3 className="slider-title me-5"> خصم كبير</h3>
                        <p className="slider-text me-5">خصم يصل 50% عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider ; 
