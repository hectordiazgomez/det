import React, {useState} from "react"

const WriteAboutThePhoto = ({ data}) => {
  const [current, setCurrent
    ] = useState(0);
  const [userResponse, setUserResponse
    ] = useState('');

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
      <div className="flex py-6 justify-center">
        <p className="text-gray-600">Describe the photo in your own words</p>
      </div>
          <div className="flex justify-center py-4">
        <img src={data[current
        ].photoURL
        } alt="Duolingo Test" className="mb-4 w-56 h-auto" />
          </div>
      <textarea
        value={userResponse
    }
        onChange={(e) => setUserResponse(e.target.value)
    }
        className="border p-2 w-full h-40"
        placeholder="Write about the photo"
      />
      <button
        onClick={handleNext
    }
        className="bg-blue-500 text-white p-2 mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default WriteAboutThePhoto;
