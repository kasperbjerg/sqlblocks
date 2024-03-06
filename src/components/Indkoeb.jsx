import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

import ReactPlayer from 'react-player/youtube';
import Player from './Player.jsx';

import { useLocalStorage } from '@uidotdev/usehooks';

import { Link } from '@tanstack/react-router';

export default function Indkoeb({}) {
  const [sqlCode, setSqlCode] = useState('');
  const handleSqlCodeChange = (e) => setSqlCode(e);

  const [result, setResult] = useState([]);
  const handleResultChange = (e) => setResult(e);

  const [tableInfo, setTableInfo] = useState([]);
  const handleTableInfoChange = (e) => setTableInfo(e);

  const [isComplete, setIsComplete] = useLocalStorage('indkoebComplete', false);

  React.useEffect(() => {
    JSON.stringify(result) == '[{"alder":42}]' ? setIsComplete(true) : '';
  }, [result]);

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
          <Player />
        </div>
        <div className="flex flex-row pb-12 pt-4">
          <div className="w-[654px]"></div>
          <button className=" top-16 rounded-md bg-sky-800/75 p-2 text-white">
            <Link to={'/reality'}>Næste øvelse</Link>
          </button>
        </div>
      </div>
    </>
  );
}
