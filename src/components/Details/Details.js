import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css';

// Details component for service details page
const Details = () => {
    const {serviceId} = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {
        fetch('https://nurmohammad62.github.io/myapi/fakeapi.json')
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    },[serviceDetails]);
    const selectedService = serviceDetails?.find(service => service.id.toString() === serviceId);
    return (
        <Container style={{marginBottom:'200px'}} className='mt-5'>
            <Row className='details'>
                <Col sm={12} lg={6}>
                    <h2 className='text-primary'>{selectedService?.title}</h2>
                    <p>{selectedService?.description}</p>
                    <h3>Charge: {selectedService?.charge}</h3>
                    <button className="btn btn-primary">Book Service</button>
                </Col>
                <Col sm={12} lg={6}>
                    <div><img src={selectedService?.img} alt="" /></div>
                </Col>
            </Row>
        </Container>
    );
};

export default Details;