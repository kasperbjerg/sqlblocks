import React, { useState } from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '.';
import '../blocks/customblocks';
import '../generator/generator';

import { useLocalStorage } from '@uidotdev/usehooks';

export default function Exercise({
  complete,
  workspace,
  description,
  feedbackText,
  completeConditionsSql,
  completeConditionsResult,
  completeConditionsTableInfo,
  initialXml,
  toolBox,
}) {
  const [sqlCode, setSqlCode] = useState('');
  const handleSqlCodeChange = (e) => setSqlCode(e);

  const [result, setResult] = useState([]);
  const handleResultChange = (e) => setResult(e);

  const [tableInfo, setTableInfo] = useState([]);
  const handleTableInfoChange = (e) => setTableInfo(e);

  const [isComplete, setIsComplete] = useLocalStorage(complete, false);

  const [reset, setReset] = useState(false);
  const [reload, setReload] = useState(false);

  React.useEffect(() => {
    typeof sqlCode !== 'undefined' &&
    completeConditionsSql.every((key) => sqlCode.includes(key) === true) &&
    completeConditionsResult.every(
      (key) => JSON.stringify(result).includes(key) === true,
    ) &&
    completeConditionsTableInfo.some(
      (key) => JSON.stringify(tableInfo).includes(key) === true,
    )
      ? setIsComplete(true)
      : '';
  }, [sqlCode, result, tableInfo]);

  return (
    <>
      <div className="relative top-2 col-span-5">
        {description}
        <button
          onClick={() => setReload(true)}
          className="text-bold absolute animate-bounce text-2xl font-bold"
        >
          {isComplete ? feedbackText : ''}
        </button>
        <div className="">
          <BlocklyComponent
            reload={reload}
            reset={reset}
            localStorageKey={workspace}
            sqlCode={sqlCode}
            handleSqlCodeChange={handleSqlCodeChange}
            result={result}
            handleResultChange={handleResultChange}
            tableInfo={tableInfo}
            handleTableInfoChange={handleTableInfoChange}
            readOnly={false}
            trashcan={false}
            media={'media/'}
            move={{
              scrollbars: {
                horizontal: true,
                vertical: true,
              },
              drag: true,
              wheel: true,
            }}
            initialXml={initialXml}
          >
            {toolBox}
          </BlocklyComponent>
        </div>
      </div>
    </>
  );
}
