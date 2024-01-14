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
import { useEffect, useRef } from 'react';

import Blockly from 'blockly/core';
import { javascriptGenerator } from 'blockly/javascript';
import locale from 'blockly/msg/en';
import 'blockly/blocks';

Blockly.setLocale(locale);

function BlocklyComponent(props) {
  const blocklyDiv = useRef();
  const toolbox = useRef();

  /*
  const generateCode = () => {
    var code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
    console.log(code);
    return code;
  };
  */

  useEffect(() => {
    const { initialXml, children, ...rest } = props;
    let workspace = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.utils.xml.textToDom(initialXml),
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

      const code = javascriptGenerator.workspaceToCode(
        workspace
      );
      return code;
    }

    workspace.addChangeListener(() => props.getCode(updateCode));
    
  }, [ toolbox, blocklyDiv ]);

  return (
    <>
      <div ref={blocklyDiv} id="blocklyDiv" />
      <div style={{ display: 'none' }} ref={toolbox}>
        {props.children}
      </div>
    </>
  );
}

export default BlocklyComponent;
