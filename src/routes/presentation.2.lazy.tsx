import { createLazyFileRoute } from '@tanstack/react-router';
import logo from '/logo.svg';
import React, { useState } from 'react';

import Presentation from '../components/Presentation.jsx';
import { Block, Field, Value } from '../components/index.js';

export const Route = createLazyFileRoute('/presentation/2')({
  component: About,
});

function About() {
  return (
    <>
      <Presentation
        presentation={'presentation2'}
        previousPresentation={'presentation1'}
        nextPresentation={'presentation3'}
        initialXml={`
              <xml xmlns="http://www.w3.org/1999/xhtml">
                <Block type="run_sqlblocks" />
              </xml>
          `}
        toolBox={
          <>
            <Block type="run_sqlblocks" />
            <Block type="create_table" />
            <Block type="add_dropdown_column" />
            <Block type="insert_into_with_columns">
              <Value name="VALUES">
                <Block type="value">
                  <Field name="NAME1"></Field>
                </Block>
              </Value>
            </Block>
            <Block type="column" />
            <Block type="value" />
            <Block type="select_open">
              <Field name="table"></Field>
              <Value name="NAME">
                <Block type="column">
                  <Field name="NAME1">*</Field>
                </Block>
              </Value>
            </Block>
            <Block type="column" />
            <Block type="aggregate" />
            <Block type="more" />
            <Block type="as" />
            <Block type="join" />
            <Block type="where" />
            <Block type="comparison" />
            <Block type="and_or" />
            <Block type="in">
              <Value name="NAME">
                <Block type="list_item">
                  <next>
                    <Block type="list_item"></Block>
                  </next>
                </Block>
              </Value>
            </Block>
            <Block type="list_item" />
            <Block type="group_by" />
            <Block type="having" />
            <Block type="order_by" />
            <Block type="limit" />
            <Block type="update" />
            <Block type="delete" />
          </>
        }
      />
    </>
  );
}
