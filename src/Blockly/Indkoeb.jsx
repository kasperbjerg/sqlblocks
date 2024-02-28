import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

import ReactPlayer from 'react-player/youtube';

import { useLocalStorage } from '@uidotdev/usehooks';

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
      <div className="relative top-2 col-span-5">
        <p className="text-1xl">Se videoen</p>
        <br></br>
        <br></br>
        {/* text-teal-700/75 */}
        {/* text-sky-800/75 */}
        <p className="text-bold absolute animate-bounce text-2xl font-bold text-teal-700/75">
          {isComplete ? 'SÅDAN!.. godt arbejde :)' : ''}
        </p>
        <ReactPlayer url="https://youtu.be/WeNeMjnM5gc" />
      </div>
    </>
  );
}
