import React, { useState } from "react"

const ReadAloud = ({ data }) => {
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
            <div className="mb-4">{data[current].textToRead}</div>
            <div className="flex justify-center py-6">
                    <button className="px-5 py-2 rounded text-white bg-purple-600">
                        Start recording
                    </button>
            </div>
            <div>
                <button
                    onClick={handleNext}
                    className="bg-blue-500 text-white p-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ReadAloud;
