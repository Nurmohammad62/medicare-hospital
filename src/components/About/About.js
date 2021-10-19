import React from 'react';
import './About.css';
import AboutBanner from '../AboutBanner/AboutBanner';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg1 from '../../imgaes/about/about-img1.jpg'
import AboutProvide from '../AboutProvide/AboutProvide';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Container>
                <Row className='about-section-1' sm={1} md={2}>
                    <Col>
                        <div>
                            <h2 className='text-primary'>Tackle The Challenge Of Delivering Health Care</h2>
                            <p>Our goal in editing this book is to provide a vibrant introduction to the U.S. health care system in a way that helps new students understand the wonders of health care. The book lays out the complexities of organizing a large sector of our economy to keep Americans healthy and to help people get better when they become ill. In addition, the book provides a framework to help professors engage students, with room for each professor to bring his or her perspective to the materials covered.</p>
                            <ul>
                                <li>Consultations Wif Specialized Pediatricians</li>
                                <li>A Wide Range Of Laboratory Studies</li>
                                <li>Ultrasound Examination</li>
                                <li>ECG, Echocardiography</li>
                            </ul>
                            <button className='btn btn-primary'>More about us</button>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src={aboutImg1} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <AboutProvide></AboutProvide> 
        </div>
    );
};

export default About;