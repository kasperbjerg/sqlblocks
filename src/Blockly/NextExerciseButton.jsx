import React from 'react';
import { Link } from '@tanstack/react-router';

export default function NextExerciseButton({ isCompleteKey, nextExercise }) {
  return (
    <>
      <div>
        {JSON.parse(localStorage.getItem(isCompleteKey)) ? (
          <button className="relative top-16 rounded-md bg-sky-800/75 p-2 text-white">
            <Link to={'/' + nextExercise}>Næste øvelse</Link>
          </button>
        ) : (
          <button className="relative top-16 rounded-md bg-sky-800/20 p-2 text-white">
            Næste øvelse
          </button>
        )}
      </div>
    </>
  );
}
