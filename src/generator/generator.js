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

javascriptGenerator.forBlock['add_columns'] = function (block, generator) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_datatype = block.getFieldValue('datatype');
  var code = text_name + ' ' + dropdown_datatype;
  if (block.previousConnection.targetBlock().type == 'add_columns') {
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

javascriptGenerator.forBlock['select'] = function (block, generator) {
  var text_rows = block.getFieldValue('rows');
  var text_table = block.getFieldValue('table');
  var code = 'SELECT ' + text_rows + ' FROM ' + text_table + ';';
  return code;
};
