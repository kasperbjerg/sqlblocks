import React, { useState, useEffect, useRef } from 'react';

import ReactPlayer from 'react-player/youtube';

import { useLocalStorage } from '@uidotdev/usehooks';

import { Link } from '@tanstack/react-router';

import NextExerciseButton from './NextExerciseButton.jsx';

export default function Video({
  isCompleteKey,
  nextExercise,
  videoUrl,
  description,
  feedbackText,
}) {
  const [isComplete, setIsComplete] = useLocalStorage(isCompleteKey, false);
  const[progress, setProgress] = useState(0);
  //const progress = useRef(0);
  
  useEffect(() => {
    
  }, [progress]);

  console.log(progress);
  return (
    <>
    {progress}
      <div className="flex flex-col">
        <div className="h-28">{description}</div>
        <div className="h-12">
          <button className="text-bold animate-bounce text-2xl font-bold">
            {isComplete ? feedbackText : ''}
          </button>
        </div>
        <div className="h-[448px]">
          <div className="relative h-full w-full pt-[43.75%]">
            <ReactPlayer
              className="absolute left-0 top-0"
              controls={true}
              url={videoUrl}
              width="1024px"
              height="448px"
              onProgress={(state)=>{setProgress(state.playedSeconds)}}
            />
          </div>
        </div>
        <div className="flex flex-row pb-12 pt-4">
          <div className="w-[662px]"></div>
          <NextExerciseButton
            isCompleteKey={isCompleteKey}
            nextExercise={nextExercise}
          />
        </div>
      </div>
    </>
  );
}
