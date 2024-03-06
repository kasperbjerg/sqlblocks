import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from './index.js';
import '../blocks/customblocks.js';
import '../generator/generator.js';

import ReactPlayer from 'react-player/youtube';

import { useLocalStorage } from '@uidotdev/usehooks';

import { Link } from '@tanstack/react-router';

export default function Video({ videoUrl }) {
  const [isComplete, setIsComplete] = useLocalStorage('indkoebComplete', false);

  return (
    <>
      <div className="flex flex-col">
        <div className="h-36">
          <p>Husk mælk og tandpasta!</p>
          <p>
            Jeg vil lave en tabel til at huske at købe chips og cola, se hvordan
            i videoen.
          </p>
          <br></br>
          <br></br>
          <button
            onClick={() => setReload(true)}
            className="text-bold animate-bounce text-2xl font-bold"
          >
            {isComplete ? 'SÅDAN' : ''}
          </button>
        </div>
        <div className="h-[448px]">
          <div className="relative h-full w-full pt-[43.75%]">
            <ReactPlayer
              className="absolute left-0 top-0"
              url={videoUrl}
              width="1024px"
              height="448px"
            />
          </div>
        </div>
        <div className="flex flex-row pb-12 pt-4">
          <div className="w-[662px]"></div>
          <button className=" top-16 rounded-md bg-sky-800/75 p-2 text-white">
            <Link to={'/reality'}>Næste øvelse</Link>
          </button>
        </div>
      </div>
    </>
  );
}
