import BlocklyComponent, { Block, Value, Field, Shadow } from './Blockly';
import './blocks/customblocks';
import './generator/generator';

function BlocklyApp() {
  return (
    <>
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
        <Block type="add_real_column" />
        <Block type="insert_into" />
        <Block type="select_*" />
        <Block type="select" />
      </BlocklyComponent>
    </>
  );
}

export default BlocklyApp;
