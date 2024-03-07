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

Blockly.Blocks['add_key_column'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(''), 'NAME')
      .appendField('INTEGER PRIMARY KEY');
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

Blockly.Blocks['add_dropdown_column'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(''), 'NAME')
      .appendField(
        new Blockly.FieldDropdown([
          ['', ''],
          ['INTEGER PRIMARY KEY', 'INTEGER PRIMARY KEY'],
          ['INTEGER', 'INTEGER'],
          ['REAL', 'REAL'],
          ['TEXT', 'TEXT'],
        ]),
        'NAME2',
      );
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
    this.setPreviousStatement(true, 'not');
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['insert_into_only_values'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('INSERT INTO')
      .appendField(new Blockly.FieldTextInput(''), 'table_NAME');
    this.appendEndRowInput();
    this.appendValueInput('VALUES').setCheck(null).appendField('VALUES (');
    this.appendDummyInput().appendField(');');
    this.setPreviousStatement(true, 'not');
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['insert_into_with_columns'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('INSERT INTO')
      .appendField(new Blockly.FieldTextInput(''), 'table_NAME');
    this.appendEndRowInput();
    this.appendValueInput('COLUMNS').appendField('(');
    this.appendDummyInput().appendField(')');
    this.appendEndRowInput();
    this.appendValueInput('VALUES').setCheck(null).appendField('VALUES (');
    this.appendDummyInput().appendField(');');
    this.setPreviousStatement(true, 'not');
    this.setNextStatement(true, null);
    this.setColour(310);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['value'] = {
  init: function () {
    this.appendValueInput('NAME')
      .setCheck(null)
      .appendField(new Blockly.FieldTextInput(''), 'NAME1');
    this.setOutput(true, null);
    this.setColour(210);
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
    this.appendValueInput('NAME').setCheck(null).appendField('SELECT');
    this.appendEndRowInput();
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

Blockly.Blocks['column'] = {
  init: function () {
    this.appendValueInput('NAME')
      .setCheck(null)
      .appendField(new Blockly.FieldTextInput(''), 'NAME1');
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['aggregate'] = {
  init: function () {
    this.appendValueInput('NAME1')
      .setCheck(null)
      .appendField(
        new Blockly.FieldDropdown([
          ['MAX', 'MAX'],
          ['MIN', 'MIN'],
          ['SUM', 'SUM'],
          ['COUNT', 'COUNT'],
          ['AVG', 'AVG'],
        ]),
        'NAME2',
      )
      .appendField('(')
      .appendField(new Blockly.FieldTextInput(''), 'NAME3')
      .appendField(')');
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['as'] = {
  init: function () {
    this.appendValueInput('NAME1')
      .setCheck(null)
      .appendField('AS')
      .appendField(new Blockly.FieldTextInput(''), 'NAME2');
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['where'] = {
  init: function () {
    this.appendValueInput('NAME').setCheck(null).appendField('WHERE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(360);
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
          ['≠', '!='],
          ['<', '<'],
          ['≤', '<='],
          ['>', '>'],
          ['≥', '>='],
          ['LIKE', 'LIKE'],
          ['NOT LIKE', 'NOT LIKE'],
          ['IS NULL', 'IS NULL'],
          ['IS NOT NULL', 'IS NOT NULL'],
        ]),
        'NAME1',
      )
      .appendField(new Blockly.FieldTextInput(''), 'NAME2');
    this.setOutput(true, null);
    this.setColour(360);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['group_by'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('GROUP BY ')
      .appendField(new Blockly.FieldTextInput(''), 'NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['having'] = {
  init: function () {
    this.appendValueInput('NAME').setCheck(null).appendField('HAVNING ');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['having_comparison'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(''), 'NAME')
      .appendField(
        new Blockly.FieldDropdown([
          ['=', '='],
          ['≠', '!='],
          ['<', '<'],
          ['≤', '<='],
          ['>', '>'],
          ['≥', '>='],
        ]),
        'NAME1',
      )
      .appendField(new Blockly.FieldTextInput(''), 'NAME2');
    this.setOutput(true, null);
    this.setColour(100);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['order_by'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('ORDER BY')
      .appendField(new Blockly.FieldTextInput(''), 'NAME1')
      .appendField(
        new Blockly.FieldDropdown([
          ['ASC', 'ASC'],
          ['DESC', 'DESC'],
        ]),
        'NAME2',
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['limit'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('LIMIT ')
      .appendField(new Blockly.FieldTextInput(''), 'NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(170);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['and_or'] = {
  init: function () {
    this.appendValueInput('NAME1').setCheck(null);
    this.appendValueInput('NAME3')
      .setCheck(null)
      .setAlign(Blockly.inputs.Align.RIGHT)
      .appendField(
        new Blockly.FieldDropdown([
          ['AND', 'AND'],
          ['OR', 'OR'],
        ]),
        'NAME2',
      );
    this.setOutput(true, null);
    this.setColour(360);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['in'] = {
  init: function () {
    this.appendStatementInput('NAME')
      .setCheck(null)
      .appendField(new Blockly.FieldTextInput(''), 'NAME1')
      .appendField(
        new Blockly.FieldDropdown([
          ['IN', 'IN'],
          ['NOT IN', 'NOT IN'],
        ]),
        'NAME2',
      );
    this.setOutput(true, null);
    this.setColour(360);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['more'] = {
  init: function () {
    this.appendValueInput('NAME1')
      .setCheck(null)
      .appendField(
        new Blockly.FieldDropdown([
          ['ABS', 'ABS'],
          ['CEILING', 'CEILING'],
          ['FLOOR', 'FLOOR'],
          ['LENGTH', 'LENGTH'],
          ['LOWER', 'LOWER'],
          ['ROUND', 'ROUND'],
          ['UPPER', 'UPPER'],
        ]),
        'NAME2',
      )
      .appendField('(')
      .appendField(new Blockly.FieldTextInput(''), 'NAME3')
      .appendField(')');
    this.setOutput(true, null);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};
