import React, { useState } from 'react';

const ReadThenSpeak = ({ data }) => {
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
            <div className="mb-4">{data[current].readingText}</div>
            <p className="mb-4">{data[current].speakingPrompt}</p>
            {/* Include audio recording functionality here */}
            <button onClick={handleNext} className="bg-blue-500 text-white p-2">Next</button>
        </div>
    );
};

export default ReadThenSpeak;
