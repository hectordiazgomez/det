import React, { useState, useEffect } from 'react';
import ListenAndType from './components/ListenAndType';
import ReadAloud from './components/ReadAloud';
import WriteAboutThePhoto from './components/WriteAboutThePhoto';
import SpeakAboutThePhoto from "./components/speak";
import ListenThenSpeak from "./components/listenspeak";
import WritingSample from "./components/writingsample";
import ReadThenWrite from "./components/write";
import ReadThenSpeak from "./components/readspeak";
import SpeakingSample from './components/speakingsample';


import DuolingoEnglishTestSample from './data/data.json';

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    <ListenAndType data={DuolingoEnglishTestSample.DuolingoEnglishTestSample.sections.ListenAndType} />,
    <ReadAloud data={DuolingoEnglishTestSample.DuolingoEnglishTestSample.sections.ReadAloud} />,
    <WriteAboutThePhoto data={DuolingoEnglishTestSample.DuolingoEnglishTestSample.sections.WriteAboutThePhoto} />,
    <SpeakAboutThePhoto data={DuolingoEnglishTestSample.DuolingoEnglishTestSample.sections.SpeakAboutThePhoto} />,
    <ListenThenSpeak data={DuolingoEnglishTestSample.DuolingoEnglishTestSample.sections.ListenThenSpeak} />,
    <SpeakingSample data={DuolingoEnglishTestSample.DuolingoEnglishTestSample.sections.SpeakingSample} />,
    <WritingSample data={DuolingoEnglishTestSample.DuolingoEnglishTestSample.sections.WritingSample} />,
    <ReadThenWrite data={DuolingoEnglishTestSample.DuolingoEnglishTestSample.sections.ReadThenWrite} />,
    <ReadThenSpeak data={DuolingoEnglishTestSample.DuolingoEnglishTestSample.sections.ReadThenSpeak} />
  ];

  useEffect(() => {
    console.log(DuolingoEnglishTestSample)
  })


  const handleNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      // Handle the end of the test
    }
  };

  return (
    <div className="flex py-32 justify-center">
        <div className='w-2/5'>
        {sections[currentSection]}
        <div className='flex justify-center py-6'>
          <button onClick={handleNextSection} className="next-section-btn px-5 py-2 rounded bg-blue-600 text-white">
            Next Section
          </button>
        </div>
        </div>
    </div>
  );
};

export default App;
