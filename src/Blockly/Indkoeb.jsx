import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

import ReactPlayer from 'react-player/youtube';

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
          <p className="text-1xl">"Husk mælk og tandpasta!!"</p>
          <br></br>
          <p>
            Jeg vil lave en tabel til at huske at købe chips og cola, se hvordan
            i videoen.
          </p>
          <p>Husk at sætte lyd på</p>
        </div>
        <div className="h-[402px]">
          <ReactPlayer url="https://youtu.be/WeNeMjnM5gc" />
        </div>
        <div className="flex flex-row">
          <div className="w-[506px]"></div>
          <button className="relative top-16 rounded-md bg-sky-800/75 p-2 text-white">
            <Link to={'/reality'}>Næste øvelse</Link>
          </button>
        </div>
      </div>
    </>
  );
}
