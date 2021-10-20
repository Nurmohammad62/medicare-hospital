import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../imgaes/banner/slide-01.jpg';
import banner2 from '../../imgaes/banner/slide-02.jpg';
import banner3 from '../../imgaes/banner/slide-03.jpg';

// Banner component for home page
const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>WELCOME TO MEDICARE HOSPITAL</h3>
                    <p>We welcome you to a warm environment, with friendly staff members who wish to serve our patients in the best way possible.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>HIGH-QUALITY CHIROPRACTIC SERVICES</h3>
                    <p>We offer affordable high-quality chiropractic services to everyone who cares about their health and would like to improve it.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>THE BEST THERAPY AND INJURIES TREATMENT</h3>
                    <p>At Chiropractic, you can get professional treatment of a wide range of injuries and experience advanced therapy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;