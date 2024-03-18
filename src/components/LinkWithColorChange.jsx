import React from 'react';
import { Link } from '@tanstack/react-router';
import { useLocalStorage } from '@uidotdev/usehooks';

export default function LinkWithColorChange({ name, Name, color }) {
  const [complete, setComplete] = useLocalStorage(name + 'Complete', false);

  return (
    <>
      <div>
        {complete ? (
          <div className={color}>
            <Link to={'/learn/' + name} className=" [&.active]:font-bold">
              {Name}
            </Link>
          </div>
        ) : (
          <div>
            <Link to={'/learn/' + name} className="[&.active]:font-bold">
              {Name}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
