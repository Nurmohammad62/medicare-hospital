import React from 'react';
import './News.css';
import { Col, Container, Row } from 'react-bootstrap';
import news1 from '../../imgaes/news/news1.jpg';
import news2 from '../../imgaes/news/news2.jpg';
import news3 from '../../imgaes/news/news3.jpg';
import NewsBanner from '../NewsBanner/NewsBanner';

// news component for news page
const News = () => {
    return (
        <div>
            <NewsBanner></NewsBanner>
            <Container>
                <Row>
                    <Col sm={12} md={6} className='mt-5 text-center'>
                        <div>
                            <img src={news1} alt="" />
                        </div>
                        <div>
                            <h1 className='text-primary'>New plastic surgery department from january ‘18</h1>
                            <p>Author: Loredana Papp | in Medicine Breacktrough | 3 Comments</p>
                            <br />
                            <p>Dr. Jacob Haiavy is a well-known cosmetic surgeon in Southern California. As the previous president of the American Board of Cosmetic Surgery and the California Academy of Cosmetic Surgery, Dr. Haiavy is also a well-regarded surgeon by his peers, loves to teach and has authored several scientific and medical journal articles for leading publications in cosmetic surgery and breast revision.</p>
                            <button className="btn btn-primary">read more</button>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className='mt-5 text-center'>
                        <div>
                            <img src={news2} alt="" />
                        </div>
                        <div>
                            <h1 className='text-primary'>Let us introduce you our new team</h1>
                            <p>Author: Loredana Papp | in Medicine Breacktrough | 3 Comments</p>
                            <br />
                            <p>Do you need a new employee announcement to use as a guide while you develop your own announcements? These sample announcement emails introduce the new employee to their new coworkers. They provide an opportunity for you to tell the current employees about the new employee and to share their skills and experience.</p>
                            <button className="btn btn-primary">read more</button>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className='mt-5 mb-5 text-center'>
                        <div>
                            <img src={news3} alt="" />
                        </div>
                        <div>
                            <h1 className='text-primary'>New techniques to perform surgery</h1>
                            <p>Author: Loredana Papp | in Medicine Breacktrough | 3 Comments</p>
                            <br />
                            <p>Before touching base with technology, we need to think about the human quotient of the department. Surgeons bear huge responsibilities: they might cause irreparable damage and medical miracles with one incision on the patient’s body. With the rise of digital technologies, the operating rooms and surgeons are inundated with new devices to make the least cuts possible. We need to deal with these new surgical technologies to make everyone understand that they extend the capabilities of surgeons instead of replacing them.</p>
                            <button className="btn btn-primary">read more</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default News;