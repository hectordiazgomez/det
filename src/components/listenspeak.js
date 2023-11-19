import React, { useState } from 'react';

const ListenThenSpeak = ({ data }) => {
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
        <div className='flex justify-center py-6'>
                <p className='text-gray-600'>Listen to the audio and then speak for 4 minutes</p>
        </div>
            <div className='flex justify-center'>
                <audio src={data[current].audioPrompt} controls className="mb-4" />
            </div>
            {/* Include audio recording functionality here */}
            <button onClick={handleNext} className="bg-blue-500 text-white p-2">Next</button>
        </div>
    );
};

export default ListenThenSpeak;
