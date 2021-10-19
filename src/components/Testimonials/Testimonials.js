import React from 'react';
import './Testimonials.css';
import { Col, Container, Row } from 'react-bootstrap';

const Testimonials = () => {
    return (
        <>
        <h1 class='text-center text-primary mt-5'>Clients Testimonials</h1>
        <section className='section-testimonials'>
            <div className='overlay'>
                <Container className='testimonials text-white'>
                    <Row sm={1} md={2}>
                        <Col>
                            <h5>"I dealt with this pain and suffered from neuropathy for the better of eight years. Now with the wonderful, friendly, and very pleasant staff at Caring Doc treating me, I am much more active and pain-free. I recommend this clinic to all my friends and colleagues!"</h5>
                            <h4>John Wilson</h4>
                            <p>Dallas, TX</p>
                        </Col>
                        <Col>
                            <h5>"I had been suffering from migraines for one year. After treatment at Caring Doc, my mood and activity level have improved considerably and my migraines are now gone! I feel great and I highly recommend this clinic for treatment and great customer service. They have true & dedicated professionals here!"</h5>
                            <h4>Edward Adams</h4>
                            <p>Santa Monica, CA</p>
                        </Col>        
                    </Row>        
                </Container>
            </div>
        </section>
        </>
    );
};

export default Testimonials;