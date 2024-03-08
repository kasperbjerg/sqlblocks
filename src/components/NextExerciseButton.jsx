import React from 'react';
import { Link } from '@tanstack/react-router';

export default function NextExerciseButton({ exercise, nextExercise }) {
  return (
    <>
      <div className="">
        {JSON.parse(localStorage.getItem(exercise+'Complete')) ? (
          <button className="rounded-md bg-sky-800/75 p-2 text-white">
            <Link to={'/' + nextExercise}>Næste øvelse</Link>
          </button>
        ) : (
          <button className="rounded-md bg-sky-800/20 p-2 text-white">
            Næste øvelse
          </button>
        )}
      </div>
    </>
  );
}
