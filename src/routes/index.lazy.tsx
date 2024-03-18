import { Outlet, createLazyFileRoute } from '@tanstack/react-router';
import BlocklyApp from '../BlocklyApp.jsx';
import logo from '/logo.svg';
import React from 'react';
import { Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: About,
});

function About() {
  return (
    <>
      <div className="">
        <header className="h-20 min-w-[1220px] bg-[#e4e4e4]">
          <div className="flex flex-row justify-between">
            <Link to={'/'} className=" [&.active]:font-bold">
              <img src={logo} className="pb-2 pl-4" alt="SQLBLOCKS logo" />
            </Link>
            <div className="flex flex-row pt-4"></div>
          </div>
        </header>
        <div className="flex flex-row flex-nowrap pt-2">
          <div className="min-w-40 basis-1/6 space-y-1 pl-4 text-lg"></div>
          <div className="relative top-2 col-span-5">
            <p className="text-xl">Velkommen til SQLBLOCKS!</p>
            <p>
              <br />
              <br />
              Hvis du aldrig har arbejdet med SQL og databaser før, kan du lære
              om det her med øvelser og video-tutorials.
              <br />
              Undervejs optjener du løbende energipoints og du får badges når du
              klarer specielle udfordringer.
              <br />
              <button className="rounded-md bg-[#5ba699] p-2 text-white">
                <Link to={'/learn/indkoeb'}>Lær at bruge SQLBLOCKS</Link>
              </button>
              <br />
              <br />
              Hvis du allerede kender lidt til SQL og databaser kan du også bare
              kaste dig direkte ud i at lave din egen database med SQLBLOCKS.
              <br />
              <button className="rounded-md bg-[#805ba6] p-2 text-white">
                <Link to={'/learn/reality'}>Ny SQLBLOCKS database</Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
