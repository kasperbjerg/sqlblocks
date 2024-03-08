import React from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';

export default function Badge({ badgeName, conditionsArray }) {
  const [complete, setComplete] = useLocalStorage(name + 'Complete', false);

  return (
    <>
      {conditionsArray.every((key) => key) ? (
        <div className="transition duration-[2000ms] ease-in-out hover:scale-[2] hover:animate-pulse">
          <img src={'/sqlblocks/' + badgeName} className="h-12" alt="Badge" />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
