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
              første møde med databaser og sql-kode. <br />
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
              kan måske stadig have glæde af et simpelt blok-baseret databasemiljø.
              <br />
              Sådanne elever elever kan sandsyligvis bare starte direkte med at
              lave en ny SQLBLOCKS database fra bunden.
              <br />
              <button className="rounded-md bg-[#805ba6] p-2 text-white">
                <Link to={'/presentation/1'}>Ny SQLBLOCKS database</Link>
              </button>
              <br />
              <p>
                <br />
                <p className="text-lg">Fagligt indhold</p>
                På nuværende tidspunkt (19. marts 2024) er der videoer og
                øvelser omkring CREATE TABLE, INSERT INTO, SELECT, WHERE, ORDER
                BY, UPDATE og DELETE, <br /> samt datatyperne TEXT, INTEGER og
                REAL. <br />
                Der vil løbende komme flere videoer og øvelser i løbet af april
                2024 så alle tilgængelige blokke introduceres.
                <br />
              </p>
              <br />
              <p className="text-lg">Arbejdsspørgsmål</p>
              Jeg har lavet nogle arbejdsspørgsmål til stoffet som jeg bruger
              til at evaluere elevernes faglige udbytte. <br />
              Samtidig får eleverne undevejs i forløbet fået genereret noget
              materiale til deres logbog og deres arbejde bliver gemt permanent.
              <br />
              Du kan finde arbejdsspørgsmålene her:{' '}
              <u>
                <a
                  href="https://drive.google.com/drive/folders/15obOgdjc8vHePtf7BTxO84iGooP17mbd?usp=sharing"
                  target="_blank"
                >
                  Arbejdsspørgsål til SQLBLOCKS
                </a>
              </u>
              .
            </p>
            <br />
            <p className="text-lg">LocalStorage (lidt teknisk)</p>
            Du skal som underviser være opmærksom på at elevernes besvarelser
            kun gemmes i localStorage. <br />
            Det betyder at hvis eleverne sletter cookies fra siden, forsvinder
            deres arbejde. <br />
            Jeg beder mine egne elever om at bruge 5 minutter i slutningen af
            hvert modul på at dokumentere besvarelser i deres logbog i
            forbindelse med arbejdsspørgsmålene.
            <br />
            Af samme årsag kan det også være nødvendigt at klikke på "start
            forfra" for at hente de rigtige blokke ind, <br /> hvis en elev har
            været nysgerrig og gået igang med en ny øvelse inden den forudgående
            øvelse er færddiggjort.
            <p>
              <br />
              <p className="text-lg">GitHub</p>
              Koden til projektet er tilgængelig på{' '}
              <u>
                <a
                  href="https://github.com/kasperbjerg/sqlblocks"
                  target="_blank"
                >
                  GitHub
                </a>
              </u>
              , hvor der også kommer en to-do og bug-list hvis du vil nørde
              igennem og måske endda hjælpe med gøre siden bedre.
            </p>
            <p>
              <br />
              <p className="text-lg">Hjælp mig</p>
              Hvis du vælger at bruge SQLBLOCKS i din undervisning i dette
              skoleår (forår 2024) vil jeg sætte umådelig stor pris på en
              tilbagemelding.
              <br />
              Jeg skal skrive om elevers udbytte af platformen, så det ville
              være skønt med noget empiri fra flere hold.
              <br />
              Jeg vil blandt andet analyse mine egne elevers svar på
              arbejdsspørgsmålene fra ovenfor,
              <br /> så hvis du også vælger at bruge arbejdsspørgsmålene og har
              mulighed for at sende dine elevers svar ville det være fantastisk.{' '}
              <br />
              En mere uformel beskrivelse af dine observationer i
              undervisningen, overvejelser om styrker/svagheder ved hjemmesiden <br />
              eller måske elevernes egne kommentarer efter at have afprøvet
              siden i praksis vil også blive modtaget med glæde.
              <br />
              <br />
              Send endelig en mail til{' '}
              <u>
                <a href="mailto:kasperbjerg@kasperbjerg.com">
                  kasperbjerg@kasperbjerg.com
                </a>
              </u>{' '}
              eller kontakt mig på facebook/messenger, hvis du har det mindste
              at dele med mig.
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
