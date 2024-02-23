import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow } from '../Blockly';
import '../blocks/customblocks';
import '../generator/generator';

export const Route = createLazyFileRoute('/sqlblocks/dagligvarer')({
  component: About,
});

function About() {
  return (
    <>
      <div className="relative top-2 col-span-4">
        <p className="text-1xl">Her kan der stå opgaver</p>
        <BlocklyComponent
          readOnly={false}
          trashcan={false}
          media={'media/'}
          move={{
            scrollbars: {
              horizontal: false,
              vertical: false,
            },
            drag: true,
            wheel: true,
          }}
          initialXml={`
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `}
        >
          <Block type="create_table" />
          <Block type="add_integer_column" />
          <Block type="add_text_column" />
          <Block type="insert_into" />
          <Block type="select_*" />
        </BlocklyComponent>
      </div>
    </>
  );
}
