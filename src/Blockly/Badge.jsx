import React from 'react';

export default function Badge({ badgeName, conditionsArray }) {
  return (
    <>
      {conditionsArray.every((key) => key) ? (
        <div className="transition duration-[3000ms] ease-out hover:scale-[4] hover:animate-pulse">
          <img src={'/sqlblocks/' + badgeName} className="h-8" alt="Badge" />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
