import React, { useState } from 'react';

const SpeakAboutThePhoto = ({ data }) => {
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
        <div className='flex justify-center'>
                <p className="mb-4 text-gray-600">{data[current].prompt}</p>
        </div>
            <div className='flex justify-center'>
                <img src={data[current].photoURL} alt="Speak about this" className="mb-4 w-56 h-auto" />
            </div>
            <div className='flex justify-center py-6'>
                <button className='px-5 py-2 rounded bg-purple-600 text-white'>Start recording</button>
            </div>
            <button onClick={handleNext} className="bg-blue-500 text-white p-2">Next</button>
        </div>
    );
};

export default SpeakAboutThePhoto;

