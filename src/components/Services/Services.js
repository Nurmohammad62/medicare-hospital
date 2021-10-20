import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices/useServices';
import Service from '../Service/Service';

// services component for home services
const Services = () => {
    const [services] = useServices();
    return (
        <Container className='mt-5 mb-5'>
            <h1 className='text-center text-primary'>Our services</h1>
            <Row className="g-4">
                {
                    services.map(service => <Service 
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;