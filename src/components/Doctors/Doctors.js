import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Doctors.css';
import { Col, Container, Row } from 'react-bootstrap';
import dr1 from '../../imgaes/Doctors/Dr-Harry-Parker.jpg';
import dr2 from '../../imgaes/Doctors/Dr-Marta-Stewart.jpg';
import dr3 from '../../imgaes/Doctors/Dr-Sarah- Johnson.jpg';
import dr4 from '../../imgaes/Doctors/Dr.-James-Allen.jpg';

// doctors component for home page
const Doctors = () => {
    const cellIcon = <FontAwesomeIcon icon={faMobileAlt} />;
    const gmailIcon = <FontAwesomeIcon icon={faEnvelope} />
    return (
        <Container>
            <h1 className='text-primary text-center mt-5'>Our Medical Specialists</h1>
            <Row xs={1} md={2} lg={4} className='g-4'>
                <Col className='doctor'>
                    <img src={dr1} alt="" />
                    <h3>Dr. Harry Parker</h3>
                    <h5><span className='icon'>{cellIcon}</span> + 800 123 45 67</h5>
                    <p><span className='icon'>{gmailIcon}</span> info@medicare.com</p>
                </Col>
                <Col className='doctor'>
                    <img src={dr2} alt="" />
                    <h3>Dr. Marta Stewart</h3>
                    <h5><span className='icon'>{cellIcon}</span> + 800 123 45 68</h5>
                    <p><span className='icon'>{gmailIcon}</span> info@medicare.com</p>
                </Col>
                <Col className='doctor'>
                    <img src={dr3} alt="" />
                    <h3>Dr. Sarah Johnson</h3>
                    <h5><span className='icon'>{cellIcon}</span> + 800 123 45 69</h5>
                    <p><span className='icon'>{gmailIcon}</span> info@medicare.com</p>
                </Col>
                <Col className='doctor'>
                    <img src={dr4} alt="" />
                    <h3>Dr. James Allen</h3>
                    <h5><span className='icon'>{cellIcon}</span> + 800 123 45 70</h5>
                    <p><span className='icon'>{gmailIcon}</span> info@medicare.com</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Doctors;