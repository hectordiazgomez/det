import React, { useState, useEffect } from "react"

const ListenAndType = ({ data }) => {
    const [current, setCurrent] = useState(0);
    const [userInput, setUserInput] = useState('');

    const handleNext = () => {
        if (current < data.length - 1) {
            setCurrent(current + 1);
            setUserInput('');
        } else {
            // Handle end of section
        }
    };

    return (
        <div className="p-4">
        <div className="flex py-6 justify-center">
            <p className="text-gray-600">Listen to the prompt and type what you hear</p>
        </div>
            <div className="flex justify-center">
                <audio src={data[current].audioPrompt} controls className="mb-4" />
            </div>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="border outline-none p-2 w-full"
                placeholder="Type what you hear"
            />
            <button
                onClick={handleNext}
                className="bg-blue-500 text-white p-2 mt-4"
            >
                Next
            </button>
        </div>
    );
};

export default ListenAndType;
