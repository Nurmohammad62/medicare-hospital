import React from 'react';
import './NewsBanner.css';

const NewsBanner = () => {
    return (
        <div className='news-banner'>
            <div className="news-banner-overlay">
                <h1 className='text-white'>Latest News</h1>
            </div>
        </div>
    );
};

export default NewsBanner;