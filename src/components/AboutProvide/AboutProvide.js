import React from 'react';
import './AboutProvide.css';
import { Col, Container, Row } from 'react-bootstrap';
import provideImg from '../../imgaes/about/about-provide.png';
const AboutProvide = () => {
    return (
        <div>
            <Container>
                <Row className='provide'>
                    <Col sm={12} md={6}>
                        <div>
                            <img src={provideImg} alt="" />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <h2 className='text-primary'>We Provide <br /> Total Health Care</h2>
                        <p>
                        We provide a vast range of medical services, so every person could have the opportunity to receive high-quality medical help.
                        <br />
                        Caring Doc Medical Clinic is committed to providing the highest quality patient care. Our dedication to excellence, compassion and innovation is rooted in our devotion to the art and science of healing, which supports every aspect of our mission.
                        </p>
                        <h5>We do our best to help you and provide the highest level of health care.</h5>
                        <button className="btn btn-primary">Learn more</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutProvide;