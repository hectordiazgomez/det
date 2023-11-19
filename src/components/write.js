import React, { useState } from 'react';

const ReadThenWrite = ({ data }) => {
    const [current, setCurrent] = useState(0);
    const [userResponse, setUserResponse] = useState('');

    const handleNext = () => {
        if (current < data.length - 1) {
            setCurrent(current + 1);
            setUserResponse('');
        } else {
            // Handle end of section
        }
    };

    return (
        <div className="p-4">
            <div className="mb-4">{data[current].readingText}</div>
            <textarea
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                className="border p-2 w-full h-40"
                placeholder="Your response"
            />
            <button onClick={handleNext} className="bg-blue-500 text-white p-2 mt-4">Next</button>
        </div>
    );
};

export default ReadThenWrite;
