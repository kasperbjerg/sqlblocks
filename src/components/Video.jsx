import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useLocalStorage } from '@uidotdev/usehooks';
import { Link } from '@tanstack/react-router';
import NextExerciseButton from './NextExerciseButton.jsx';
import ReloadDummy from './ReloadDummy.jsx';

export default function Video({
  isCompleteKey,
  nextExercise,
  videoUrl,
  description,
  feedbackText,
}) {
  const [isComplete, setIsComplete] = useLocalStorage(isCompleteKey, false);
  const [reload, setReload] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress > 0.8) {
      setIsComplete(true);
    }
  }, [progress]);

  console.log(progress);
  return (
    <>
      <ReloadDummy reload={reload} />
      <div className="flex flex-col">
        <div className="h-28">{description}</div>
        <div className="h-12">
          <button
            onClick={() => setReload(true)}
            className="text-bold animate-bounce text-2xl font-bold"
          >
            {isComplete ? feedbackText : ''}
          </button>
        </div>
        <div className="h-[448px]">
          <div className="relative h-full w-full pt-[43.75%]">
            <ReactPlayer
              className="absolute left-0 top-0"
              controls={true}
              light={true}
              url={videoUrl}
              width="1024px"
              height="448px"
              onProgress={(state) => {
                setProgress(state.played);
              }}
            />
          </div>
        </div>
        <div className="flex w-[1024px] flex-row justify-end pb-12 pt-4">
          <div className="shrink-0">
            <NextExerciseButton
              isCompleteKey={isCompleteKey}
              nextExercise={nextExercise}
            />
          </div>
        </div>
      </div>
    </>
  );
}
