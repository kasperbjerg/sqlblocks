import React from 'react';
import { Link } from '@tanstack/react-router';

export default function LinkWithColorChange({ name, Name, color }) {
  return (
    <>
      <div>
        {JSON.parse(localStorage.getItem(name+'Complete')) ? (
          <div className={color}>
            <Link to={'/' + name} className=" [&.active]:font-bold">
              {Name}
            </Link>
          </div>
        ) : (
          <div>
            <Link to={'/' + name} className="[&.active]:font-bold">
              {Name}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
