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
import { javascriptGenerator } from 'blockly/javascript';

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
    [
      'add_integer_column',
      'add_text_column',
      'add_real_column',
      'add_key_column',
      'add_dropdown_column',
    ].includes(block.previousConnection.targetBlock().type)
  ) {
    code = ', ' + code;
  }
  return code;
};

javascriptGenerator.forBlock['add_text_column'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME');
  var code = text_name + ' TEXT';
  if (
    [
      'add_integer_column',
      'add_text_column',
      'add_real_column',
      'add_key_column',
      'add_dropdown_column',
    ].includes(block.previousConnection.targetBlock().type)
  ) {
    code = ', ' + code;
  }
  return code;
};

javascriptGenerator.forBlock['add_real_column'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME');
  var code = text_name + ' REAL';
  if (
    [
      'add_integer_column',
      'add_text_column',
      'add_real_column',
      'add_key_column',
      'add_dropdown_column',
    ].includes(block.previousConnection.targetBlock().type)
  ) {
    code = ', ' + code;
  }
  return code;
};

javascriptGenerator.forBlock['add_key_column'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME');
  var code = text_name + ' INTEGER PRIMARY KEY';
  if (
    [
      'add_integer_column',
      'add_text_column',
      'add_real_column',
      'add_key_column',
      'add_dropdown_column',
    ].includes(block.previousConnection.targetBlock().type)
  ) {
    code = ', ' + code;
  }
  return code;
};

javascriptGenerator.forBlock['add_dropdown_column'] = function (
  block,
  generator,
) {
  var column_name = block.getFieldValue('NAME');
  var column_type = block.getFieldValue('NAME2');
  var code = column_name + ' ' + column_type;
  if (
    [
      'add_integer_column',
      'add_text_column',
      'add_real_column',
      'add_key_column',
      'add_dropdown_column',
    ].includes(block.previousConnection.targetBlock().type)
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

javascriptGenerator.forBlock['insert_into_only_values'] = function (
  block,
  generator,
) {
  var text_table = block.getFieldValue('table_NAME');
  var values = generator.statementToCode(block, 'VALUES');
  var code = 'INSERT INTO ' + text_table + ' VALUES (' + values + ');';
  return code;
};

javascriptGenerator.forBlock['insert_into_with_columns'] = function (
  block,
  generator,
) {
  var text_table = block.getFieldValue('table_NAME');
  var columns = generator.statementToCode(block, 'COLUMNS');
  var values = generator.statementToCode(block, 'VALUES');
  var code = 'INSERT INTO ' + text_table + ' VALUES (' + values + ');';
  if (columns) {
    code =
      'INSERT INTO ' +
      text_table +
      '(' +
      columns +
      ')' +
      ' VALUES (' +
      values +
      ');';
  }

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
  var code = 'SELECT' + text_rows + ' FROM ' + text_table + ';';
  return code;
};

javascriptGenerator.forBlock['select_open'] = function (block, generator) {
  var value_name = generator.statementToCode(block, 'NAME');
  var text_table = block.getFieldValue('table');
  var statements_filters = generator.statementToCode(block, 'filters');
  // TODO: Assemble javascript into code variable.
  var code =
    'SELECT' + value_name + ' FROM ' + text_table + statements_filters + ';';
  return code;
};

javascriptGenerator.forBlock['join'] = function (block, generator) {
  var dropdown_type = block.getFieldValue('type');
  var text_table2 = block.getFieldValue('table2');
  var text_column1 = block.getFieldValue('column1');
  var text_columns2 = block.getFieldValue('columns2');
  // TODO: Assemble javascript into code variable.
  var code =
    ' ' +
    dropdown_type +
    ' ' +
    text_table2 +
    ' ON ' +
    text_column1 +
    ' = ' +
    text_columns2 +
    ' ';
  return code;
};

javascriptGenerator.forBlock['column'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME1');
  var next_block = generator.statementToCode(block, 'NAME');
  // TODO: Assemble javascript into code variable.

  var code = text_name;

  //Check if next block is an AS-blcok
  if (next_block && next_block.trim().slice(0, 3) == 'AS ') {
    return code + ' ' + next_block;
  }
  //Checks more columns-blcoks (not AS)
  if (next_block) {
    return code + ',' + next_block;
  }
  return code;
};

javascriptGenerator.forBlock['value'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME1');
  var value_name = generator.statementToCode(block, 'NAME');
  // TODO: Assemble javascript into code variable.

  var code = text_name;
  if (value_name) {
    code = code + ', ' + value_name;
  }

  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

javascriptGenerator.forBlock['aggregate'] = function (block, generator) {
  var dropdown_name2 = block.getFieldValue('NAME2');
  var text_name3 = block.getFieldValue('NAME3');
  var next_block = generator.statementToCode(block, 'NAME1');
  // TODO: Assemble javascript into code variable.
  var code = dropdown_name2 + '(' + text_name3 + ')';

  //Check if next block is an AS-blcok
  if (next_block && next_block.trim().slice(0, 3) == 'AS ') {
    return code + ' ' + next_block;
  }
  //Checks more columns-blcoks (not AS)
  if (next_block) {
    return code + ', ' + next_block;
  }
  return code;
};

javascriptGenerator.forBlock['as'] = function (block, generator) {
  var next_block = generator.statementToCode(block, 'NAME1');
  var alias = block.getFieldValue('NAME2');
  // TODO: Assemble javascript into code variable.
  var code = ' AS ' + alias;
  if (next_block) {
    code = code + ', ' + next_block;
  }
  return code;
};

javascriptGenerator.forBlock['more'] = function (block, generator) {
  var dropdown_name2 = block.getFieldValue('NAME2');
  var text_name3 = block.getFieldValue('NAME3');
  var next_block = generator.statementToCode(block, 'NAME1');
  // TODO: Assemble javascript into code variable.
  var code = dropdown_name2 + '(' + text_name3 + ')';

  //Check if next block is an AS-blcok
  if (next_block && next_block.trim().slice(0, 3) == 'AS ') {
    return code + ' ' + next_block;
  }
  //Checks more columns-blcoks (not AS)
  if (next_block) {
    return code + ', ' + next_block;
  }
  return code;
};

javascriptGenerator.forBlock['where'] = function (block, generator) {
  var statements_name = generator.statementToCode(block, 'NAME');
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
  return code;
};

javascriptGenerator.forBlock['list_item'] = function (
  block,
  generator,
) {
  var text_item_name = block.getFieldValue('item_name');
  // TODO: Assemble javascript into code variable.
  var code = text_item_name + ',';
  return code;
};

javascriptGenerator.forBlock['group_by'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble javascript into code variable.
  var code = 'GROUP BY ' + text_name;
  return code;
};

javascriptGenerator.forBlock['having'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_name1 = block.getFieldValue('NAME1');
  var text_name2 = block.getFieldValue('NAME2');
  var code = ' HAVING ' + text_name + dropdown_name1 + text_name2;
  return code;
};

javascriptGenerator.forBlock['order_by'] = function (block, generator) {
  var text_name1 = block.getFieldValue('NAME1');
  var dropdown_name2 = block.getFieldValue('NAME2');
  // TODO: Assemble javascript into code variable.
  var code = ' ORDER BY ( ' + text_name1 + ' ) ' + dropdown_name2;
  return code;
};

javascriptGenerator.forBlock['limit'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble javascript into code variable.
  var code = ' LIMIT ' + text_name;
  return code;
};

javascriptGenerator.forBlock['update'] = function (block, generator) {
  var text_table = block.getFieldValue('table');
  var text_column = block.getFieldValue('column');
  var text_new_value = block.getFieldValue('new_value');
  var compare_column = block.getFieldValue('compare_column');
  var comparator = block.getFieldValue('comparator');
  var compare_value = block.getFieldValue('compare_value');

  // TODO: Assemble javascript into code variable.
  var code =
    'UPDATE ' +
    text_table +
    ' SET ' +
    text_column +
    '=' +
    text_new_value +
    ' WHERE ' +
    compare_column + ' ' +
    comparator + ' ' +
    compare_value +
    ';';
  return code;
};

javascriptGenerator.forBlock['delete'] = function (block, generator) {
  var text_table = block.getFieldValue('table');
  var compare_column = block.getFieldValue('compare_column');
  var comparator = block.getFieldValue('comparator');
  var compare_value = block.getFieldValue('compare_value');

  // TODO: Assemble javascript into code variable.
  var code =
    'DELETE FROM ' +
    text_table +
    ' WHERE ' +
    compare_column +
    ' ' +
    comparator +
    ' ' +
    compare_value +
    ';';
  return code;
};
