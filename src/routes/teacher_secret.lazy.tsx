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
      <div className="relative top-2">
        <p className="text-xl">
          Velkommen til den "hemmelige" lærerunderside til SQLBLOCKS!
        </p>
        <p>
          <br />
          Denne side er tænkt som en vejledning til dig, hvis du overvejer at
          bruge SQLBLOCKS i din undervisning.
        </p>

        <p>
          <br />
          Tanken er at hjemmesiden kan "stå alene", men ud over dette har jeg
          også lavet nogle arbejdsspørgsmål til stoffet. <br />
          Jeg har selv anvendt disse arbejdsspørgsmål til at evaluere elevernes
          udbytte. <br />
          Samtidig har eleverne undevejs i forløbet fået genereret noget
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
          Hvis du eller dine elever sidder fast i en opgave har jeg lagt
          løsninger op:
          <br />
          Tilføj "_complete" i adresselinjen f.eks.{' '}
          <u>
            <Link to={'/reality_complete'}>
              {' '}
              https://kasperbjerg.github.io/sqlblocks/#/reality_complete
            </Link>
          </u>.
          <br />
          Load siden og klik herefter på "Start igen"-knappen nederst og acceptér at
          starte øvelsen forfra. <br />
          Gå til sidst tilbage til den originale øvelsesside, hvor der er lagt
          en besvarelse ind som du kan vise til eleverne.
        </p>
        <p></p>
      </div>
    </>
  );
}
