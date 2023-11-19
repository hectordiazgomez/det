import React, { useState } from 'react';

const SpeakingSample = ({ data }) => {

    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        if (current < data.length - 1) {
            setCurrent(current + 1);
        } else {
            // Handle end of section
        }
    };


    return (
        <div className="p-4">
            <p className="mb-4">{data[current].prompt}</p>
            {/* Include audio recording functionality here */}
            {/* exampleAnswer can be used for reference or guidance */}
        </div>
    );
};


export default SpeakingSample;