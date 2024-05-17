import { Outlet, createLazyFileRoute } from '@tanstack/react-router';
import BlocklyApp from '../BlocklyApp.jsx';
import logo from '/logo.svg';
import React from 'react';
import { Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/teacher_secret')({
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
          <div className="relative top-2">
            <p className="text-xl">
              Velkommen til den "hemmelige" lærerunderside af SQLBLOCKS!
            </p>
            <p>
              <br />
              Denne side er en vejledning til dig, hvis du overvejer at bruge
              SQLBLOCKS i din undervisning.
            </p>
            <p>
              <br />
              <p className="text-lg">Målgruppe</p>
              Hjemmesiden er primært lavet til at være danske informatikelevers
              første møde med databaser og SQL. <br />
              Gennem video-tutorials og hands-on øvelser med feedback bliver
              eleverne bedre i stand til at kunne{' '}
              <i>
                redegøre for databasers anvendelse og simple
                databaseforespørgsler
              </i>
              .
              <br />
              <button className="rounded-md bg-[#5ba699] p-2 text-white">
                <Link to={'/learn/indkoeb'}>Lær at bruge SQLBLOCKS</Link>
              </button>
              <br />
              <br />
              Nogle hold har måske allerede været igennem SQL, men svage elever
              kan måske stadig have glæde af et simpelt blok-baseret
              databasemiljø.
              <br />
              Sådanne elever elever kan sandsyligvis bare starte direkte med at
              lave en ny SQLBLOCKS database fra bunden.
              <br />
              <button className="rounded-md bg-[#805ba6] p-2 text-white">
                <Link to={'/presentation/1'}>Ny SQLBLOCKS database</Link>
              </button>
              <br />
            </p>
            <br />
            <p className="text-lg">LocalStorage</p>
            Du skal som underviser være opmærksom på at elevernes besvarelser
            kun gemmes i localStorage. <br />
            Det betyder at hvis eleverne sletter cookies fra siden, forsvinder
            deres arbejde. <br />
            Jeg beder mine egne elever om at bruge 5 minutter i slutningen af
            hvert modul på at dokumentere besvarelser i deres logbog.
            <br />
            Af samme årsag kan det også være nødvendigt at klikke på "start
            forfra" for at hente de rigtige blokke ind, <br /> hvis en elev har
            været nysgerrig og gået igang med en ny øvelse inden den forudgående
            øvelse er færddiggjort.
            <p>
              <br />
              <p className="text-lg">GitHub</p>
              Projektet er open source og koden er tilgængelig på{' '}
              <u>
                <a
                  href="https://github.com/kasperbjerg/sqlblocks"
                  target="_blank"
                >
                  GitHub
                </a>
              </u>
             , hvor der også er en række åbne{' '}
              <u>
                <a
                  href="https://github.com/kasperbjerg/sqlblocks/issues"
                  target="_blank"
                >
                  issues
                </a>
              </u>,{' '}
              hvis du skulle have tid og lyst til at hjælpe med at gøre siden bedre.
            </p>
            <p>
              <br />
              Happy Coding!
              <br />
              //Kasper
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
