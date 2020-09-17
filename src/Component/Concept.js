import React from 'react';
import './Concept.css';
import Slider from './Slider';

const Concept = () => {
    return (
        <div className="concept">
            <div className="container">
                <div className="concept__heading">
                    <h1>Concept Videos</h1>
                    <span>Select a number</span>
                </div>
                <Slider />
            </div>
        </div>
    )
}

export default Concept
