/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blockly React Component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import './BlocklyComponent.css';
import { useState, useEffect, useRef } from 'react';

import Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import locale from 'blockly/msg/en';
import 'blockly/blocks';

import sqlite3InitModule from '@sqlite.org/sqlite-wasm';
import SQLITEComponent from './SQLITEComponent.jsx';

import { useLocalStorage } from '@uidotdev/usehooks';

Blockly.setLocale(locale);

export default function BlocklyComponent({
  reset,
  localStorageKey,
  initialXml,
  children,
  move,
  sqlCode,
  handleSqlCodeChange,
  result,
  handleResultChange,
  tableInfo,
  handleTableInfoChange,
}) {
  const blocklyDiv = useRef();
  const toolbox = useRef();

  const [storedXml, setStoredXml] = useLocalStorage(localStorageKey, '');

  useEffect(() => {
    let workspace = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      move,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.utils.xml.textToDom(
          storedXml.length != 0 ? storedXml : initialXml,
        ),
        workspace,
      );
    }

    /*
    const supportedEvents = new Set([
      Blockly.Events.BLOCK_CHANGE,
      Blockly.Events.BLOCK_CREATE,
      Blockly.Events.BLOCK_DELETE,
      Blockly.Events.BLOCK_MOVE,
    ]);
    */

    function updateCode(event) {
      if (workspace.isDragging()) return; // Don't update while changes are happening.
      //if (!supportedEvents.has(event.type)) return; Error

      let code = javascriptGenerator.workspaceToCode(workspace);

      // Add a preamble and a postscript to the code.
      code = `${code}`;

      //save current workspace to local storage
      const xmlDom = Blockly.Xml.workspaceToDom(workspace);
      const xmlText = Blockly.Xml.domToText(xmlDom);
      setStoredXml(xmlText);

      return code;
    }

    workspace.addChangeListener(() => handleSqlCodeChange(updateCode));
    workspace.addChangeListener(Blockly.Events.disableOrphans);
  }, [toolbox, blocklyDiv]);

  if (reset) {
    setStoredXml('');
    location.reload();
  }

  return (
    <>
      <div className="relative top-12 grid grid-cols-2 gap-4">
        <div className="">
          <div ref={blocklyDiv} id="blocklyDiv" />
          <div style={{ display: 'none' }} ref={toolbox}>
            {children}
          </div>
        </div>
        <div className="">
          <SQLITEComponent
            sqlCode={sqlCode}
            result={result}
            handleResultChange={handleResultChange}
            tableInfo={tableInfo}
            handleTableInfoChange={handleTableInfoChange}
          />
        </div>
      </div>
    </>
  );
}
