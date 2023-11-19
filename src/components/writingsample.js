// Speaking Sample
import React, { useState } from 'react';

const WritingSample = ({ data }) => {
    const [userResponse, setUserResponse] = useState('');
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
            <div className='flex py-6 justify-center'>
                <p className='text-gray-600'>Writing sample</p>
            </div>
            <p className="mb-4">{data[current].prompt}</p>
            <textarea
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                className="border p-2 w-full h-40"
                placeholder="Your essay"
            />
            {/* exampleEssay can be used for reference or guidance */}
        </div>
    );
};

export default WritingSample;
