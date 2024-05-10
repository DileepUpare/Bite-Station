import React from 'react';
import TutorialGIF from "../Assets/images/Video tutorial.gif";

const TutorialGuidePage: React.FC = () => {
  return (
    <div>
      <div className="font-goliBold md:text-7xl text-4xl text-left mt-14">
        Tutorials and Guides:
      </div>
      <div>
        {/* Displaying GIF */}
        <img src={TutorialGIF} className="md:ml-[55vw] md:size-[40vw]" alt="Tutorial GIF" />
      </div>
      <div className='mt-[-36vw] ml-5 mb-80'>
        {/* Embedding YouTube video */}
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/O6kLgpHvnbA" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TutorialGuidePage;
