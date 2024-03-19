import { Outlet, createLazyFileRoute } from '@tanstack/react-router';
import BlocklyApp from '../BlocklyApp.jsx';
import logo from '/logo.svg';
import React from 'react';
import { Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/teacher_secret_old')({
  component: About,
});

function About() {
  return (
    <>
      <div className="relative top-2">
        <p className="text-xl">
          Velkommen til den "hemmelige" lærerunderside af SQLBLOCKS!
        </p>
        <p>
          <br />
          Denne side er tænkt som en vejledning til dig, hvis du overvejer at
          bruge SQLBLOCKS i din undervisning.
        </p>

        <p>
          <br />
          Hjemmesiden kan sagtens "stå alene", men har jeg også lavet nogle
          arbejdsspørgsmål til stoffet. <br />
          Jeg anvender selv disse arbejdsspørgsmål til at evaluere elevernes
          udbytte. <br />
          Samtidig får eleverne undevejs i forløbet fået genereret noget
          materiale til deres logbog.
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

        <p>
          <br />
          Hvis en øvelse driller har jeg lagt løsninger op. De findes ved at
          gøre følgende:
          <br />- Tilføj "_complete" i adresselinjen f.eks.{' '}
          <u>
            <Link to={'/reality_complete'}>
              {' '}
              https://kasperbjerg.github.io/sqlblocks/#/reality_complete
            </Link>
          </u>
          .
          <br />
          - Load siden og klik herefter på "Start igen"-knappen nederst og
          acceptér at starte øvelsen forfra. <br />- Gå til sidst tilbage til
          den originale øvelsesside, hvor der er lagt en besvarelse ind som du
          kan vise til eleverne uden at de kan se linket.
        </p>
        <p>
          <br />
          Videoerne og øvelserne til venstre er færdige og klar til
          undervisning, men der vil løbende komme flere i løbet af marts og
          starten og april 2024.
          <br />
          Målet er at lave undervisningsmateriale til den fulde version{' '}
          <u>
            <Link to={'/test'}> som ligger her</Link>
          </u>{' '}
          .
        </p>
        <p>
          <br />
          Koden til projektet er tilgængelig på{' '}
          <u>
            <a href="https://github.com/kasperbjerg/sqlblocks" target="_blank">
              GitHub
            </a>
          </u>
          , hvor der også er en to-do og bug-list hvis du vil nørde igennem og
          måske endda hjælpe med projektet ;)
        </p>
        <p>
          <br />
          Hvis du vælger at bruge SQLBLOCKS i din undervisning i dette skoleår
          (forår 2024) vil jeg sætte umådelig stor pris på en tilbagemelding.
          <br />
          Jeg skal skrive om elevers udbytte af platformen, så det ville være
          skønt med noget empiri fra flere hold.
          <br />
          Planen er at analyse mine egne elevers svar på arbejdsspørgsmålene fra
          ovenfor samt via fokusgruppe-interviews,
          <br /> men en mere uformel beskrivelse af dine observationer i
          undervisningen ville også blive modtaget med glæde.
          <br />
          Send endelig en mail til{' '}
          <u>
            <a href="mailto:kasperbjerg“kasperbjerg.com">
              kasperbjerg@kasperbjerg.com
            </a>
          </u>
          , hvis du har det mindste
        </p>
        <p>
          <br />
          //Kasper
        </p>
      </div>
    </>
  );
}
