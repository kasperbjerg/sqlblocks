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
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks

import * as Blockly from 'blockly/core';

Blockly.Blocks['run_sqlblocks'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('RUN')
      .appendField(
        new Blockly.FieldImage(
          'https://kasperbjerg.github.io/sqlblocks/logo.svg',
          50,
          50,
          { alt: '*', flipRtl: 'FALSE' },
        ),
      );
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['create_table'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('CREATE TABLE')
      .appendField(new Blockly.FieldTextInput(''), 'NAME')
      .appendField('(');
    this.appendStatementInput('NAME').setCheck(null);
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.RIGHT)
      .appendField(');');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['add_integer_column'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(''), 'NAME')
      .appendField('INTEGER');
    this.setPreviousStatement(true, [
      'create_table',
      'add_integer_column',
      'add_text_column',
      'add_real_column',
    ]);
    this.setNextStatement(
      true,
      'add_integer_column',
      'add_text_column',
      'add_real_column',
    );
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['add_text_column'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(''), 'NAME')
      .appendField('TEXT');
    this.setPreviousStatement(true, [
      'create_table',
      'add_integer_column',
      'add_text_column',
      'add_real_column',
    ]);
    this.setNextStatement(
      true,
      'add_integer_column',
      'add_text_column',
      'add_real_column',
    );
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['add_real_column'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(''), 'NAME')
      .appendField('REAL');
    this.setPreviousStatement(true, [
      'create_table',
      'add_integer_column',
      'add_text_column',
      'add_real_column',
    ]);
    this.setNextStatement(
      true,
      'add_integer_column',
      'add_text_column',
      'add_real_column',
    );
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['insert_into'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('INSERT INTO')
      .appendField(new Blockly.FieldTextInput(''), 'table_NAME');
    this.appendDummyInput()
      .appendField('VALUES (')
      .appendField(new Blockly.FieldTextInput(''), 'row_names')
      .appendField(');');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['select_*'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('SELECT * FROM')
      .appendField(new Blockly.FieldTextInput(''), 'table')
      .appendField(';');
    this.setPreviousStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['select'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('SELECT')
      .appendField(new Blockly.FieldTextInput(''), 'rows')
      .appendField('FROM')
      .appendField(new Blockly.FieldTextInput(''), 'table')
      .appendField(';');
    this.setPreviousStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['select_open'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('SELECT')
      .appendField(new Blockly.FieldTextInput(''), 'rows');
    this.appendDummyInput()
      .appendField('FROM')
      .appendField(new Blockly.FieldTextInput(''), 'table');
    this.appendStatementInput('filters').setCheck(null);
    this.appendDummyInput()
      .setAlign(Blockly.inputs.Align.RIGHT)
      .appendField(';');
    this.setPreviousStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['where'] = {
  init: function () {
    this.appendValueInput('NAME')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField('WHERE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['comparison'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(''), 'NAME')
      .appendField(
        new Blockly.FieldDropdown([
          ['=', '='],
          ['≠', '≠'],
          ['<', '<'],
          ['≤', '≤'],
          ['>', '>'],
          ['≥', '≥'],
          ['IN', 'IN'],
        ]),
        'NAME1',
      )
      .appendField(new Blockly.FieldTextInput(''), 'NAME2');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['and'] = {
  init: function () {
    this.appendValueInput('NAME1').setCheck(null);
    this.appendValueInput('NAME2')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('AND');
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
