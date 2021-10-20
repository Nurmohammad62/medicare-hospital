import React from 'react';
import './Service.css';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

// single service component
const Service = (props) => {
    const history = useHistory();
    const{id, title, img, description} = props.service;

    const handleDetails = () => {
        history.push(`/details/${id}`);
    }
    return (
        <Col sm={12} md={6} lg={4}>
            <Card>
                <Card.Img className='card-img' variant="top" src={img} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description.slice(0,100)}
                </Card.Text>
                </Card.Body>
                <button onClick={handleDetails} className="btn btn-primary">view details</button>
            </Card>
        </Col>
    );
};

export default Service;