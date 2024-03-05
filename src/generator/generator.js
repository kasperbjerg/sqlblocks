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
 * @fileoverview Define generation methods for custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on generating code:
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

import { CodeGenerator } from 'blockly';
import { javascriptGenerator, Order } from 'blockly/javascript';

javascriptGenerator.forBlock['run_sqlblocks'] = function (block, generator) {
  var code = '';
  return code;
};

javascriptGenerator.forBlock['create_table'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME');
  var statements_name = generator.statementToCode(block, 'NAME');
  var code = 'CREATE TABLE ' + text_name + ' (' + statements_name + ');';
  return code;
};

javascriptGenerator.forBlock['add_integer_column'] = function (
  block,
  generator,
) {
  var text_name = block.getFieldValue('NAME');
  var code = text_name + ' INTEGER';
  if (
    ['add_integer_column', 'add_text_column', 'add_real_column'].includes(
      block.previousConnection.targetBlock().type,
    )
  ) {
    code = ', ' + code;
  }
  return code;
};

javascriptGenerator.forBlock['add_text_column'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME');
  var code = text_name + ' TEXT';
  if (
    ['add_integer_column', 'add_text_column', 'add_real_column'].includes(
      block.previousConnection.targetBlock().type,
    )
  ) {
    code = ', ' + code;
  }
  return code;
};

javascriptGenerator.forBlock['add_real_column'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME');
  var code = text_name + ' REAL';
  if (
    ['add_integer_column', 'add_text_column', 'add_real_column'].includes(
      block.previousConnection.targetBlock().type,
    )
  ) {
    code = ', ' + code;
  }
  return code;
};

javascriptGenerator.forBlock['insert_into'] = function (block, generator) {
  var text_table_name = block.getFieldValue('table_NAME');
  var text_row_names = block.getFieldValue('row_names');
  var code =
    'INSERT INTO ' + text_table_name + ' VALUES (' + text_row_names + ');';
  return code;
};

javascriptGenerator.forBlock['select_*'] = function (block, generator) {
  var text_rows = block.getFieldValue('rows');
  var text_table = block.getFieldValue('table');
  var code = 'SELECT * FROM ' + text_table + ';';
  return code;
};

javascriptGenerator.forBlock['select'] = function (block, generator) {
  var text_rows = block.getFieldValue('rows');
  var text_table = block.getFieldValue('table');
  var code = 'SELECT ' + text_rows + ' FROM ' + text_table + ';';
  return code;
};

javascriptGenerator.forBlock['select_open'] = function (block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  var text_table = block.getFieldValue('table');
  var statements_filters = generator.statementToCode(block, 'filters');
  // TODO: Assemble javascript into code variable.
  var code =
    'SELECT ' + value_name + ' FROM ' + text_table + statements_filters + ';';
  return code;
};

javascriptGenerator.forBlock['column'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME1');
  var value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);
  // TODO: Assemble javascript into code variable.

  var code = text_name;
  if (value_name) {
    code = code + ', ' + value_name;
  }

  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Order.ATOMIC];
};

javascriptGenerator.forBlock['aggregate'] = function (block, generator) {
  var dropdown_name2 = block.getFieldValue('NAME2');
  var text_name3 = block.getFieldValue('NAME3');
  var value_name1 = generator.valueToCode(block, 'NAME1', Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = dropdown_name2 + '(' + text_name3 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  if (value_name1) {
    code = code + ', ' + value_name1;
  }
  return [code, Order.ATOMIC];
};

javascriptGenerator.forBlock['where'] = function (block, generator) {
  var statements_name = generator.statementToCode(block, 'NAME', Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = 'WHERE ' + statements_name;
  return code;
};

javascriptGenerator.forBlock['comparison'] = function (block, generator) {
  var text_name1 = block.getFieldValue('NAME');
  var dropdown_name = block.getFieldValue('NAME1');
  var text_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble javascript into code variable.
  var code = text_name1 + ' ' + dropdown_name + ' ' + text_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

javascriptGenerator.forBlock['order_by'] = function (block, generator) {
  var text_name1 = block.getFieldValue('NAME1');
  var dropdown_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble javascript into code variable.
  var code = ' ORDER BY ( ' + text_name1 + ' ) ' + dropdown_name2;
  return code;
};

javascriptGenerator.forBlock['group_by'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble javascript into code variable.
  var code = ' GROUP BY (' + text_name + ')';
  return code;
};

javascriptGenerator.forBlock['and_or'] = function (block, generator) {
  var value_name1 = generator.statementToCode(block, 'NAME1');
  var dropdown_name3 = block.getFieldValue('NAME2');
  var value_name2 = generator.statementToCode(block, 'NAME3');
  // TODO: Assemble javascript into code variable.
  var code = value_name1 + ' ' + dropdown_name3 + ' ' + value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

javascriptGenerator.forBlock['in'] = function (block, generator) {
  var text_name1 = block.getFieldValue('NAME1');
  var dropdown_name2 = block.getFieldValue('NAME2');
  var statements_name = generator.statementToCode(block, 'NAME');
  // TODO: Assemble javascript into code variable.
  var code =
    text_name1 +
    ' ' +
    dropdown_name2 +
    ' ( ' +
    statements_name.slice(0, -1) +
    ' ) '; //slice to remove the ; from subquery
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
