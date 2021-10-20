import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices/useServices';
import Service from '../../Service/Service';
import ServicesBanner from '../../ServicesBanner/ServicesBanner';

// services component for services page
const PageServices = () => {
    const [services] = useServices();
    return (
        <>
            <ServicesBanner></ServicesBanner>
            <Container className='mt-5 mb-5'>
                <Row className="g-4">
                    {
                        services.map(service => <Service 
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default PageServices;