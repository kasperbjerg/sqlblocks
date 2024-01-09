import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly';
import './blocks/customblocks';
import './generator/generator';
import Sql from './Sql.jsx'
import {useState} from 'react';

function BlocklyApp() {
    const [code,setCode] = useState("Her kommer koden")

    return (
          <div className="grid grid-cols-2 gap-4 text-center relative top-12">
            <div className="">
            <BlocklyComponent getCode = {(kode) => setCode(kode)} readOnly={false}
          trashcan={false} media={'media/'}
          move={{
            scrollbars: {
                horizontal: false,
                vertical: true
            },
            drag: true,
            wheel: true
        }}
        initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_ifelse" x="0" y="0"></block>
</xml>
      `}>
            <Block type="test_react_field" />
            <Block type="controls_ifelse" />
            <Block type="logic_compare" />
            <Block type="logic_operation" />
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="logic_operation" />
            <Block type="logic_negate" />
            <Block type="logic_boolean" />
            <Block type="logic_null" disabled="true" />
            <Block type="logic_ternary" />
            <Block type="text_charAt">
              <Value name="VALUE">
                <Block type="variables_get">
                  <Field name="VAR">text</Field>
                </Block>
              </Value>
            </Block>
          </BlocklyComponent>
          </div>
            <div className="text-3xl font-serif">
                <Sql text={code}/>
            </div>
          </div>

        
    )
}

export default BlocklyApp