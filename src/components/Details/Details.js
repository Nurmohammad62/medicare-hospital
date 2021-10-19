import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <p>Id: {serviceId}</p>
            <h2>Details comming soon</h2>
        </div>
    );
};

export default Details;