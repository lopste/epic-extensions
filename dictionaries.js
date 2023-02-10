class EpicExtension {
  getInfo() {
    this.dictionaries = {}
    return {
      id: "vercte-dictionaries",
      name: "Dictionaries",
      blocks: [
        {
          opcode: "getValue",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get key [VAL] of [DICT]",
          arguments: {
            DICT: {type: Scratch.ArgumentType.STRING, defaultValue: "foo"},
            VAL:  {type: Scratch.ArgumentType.STRING, defaultValue: "bar"}
          }
        }
      ]
    }
    
    getValue(args) {
      
    }
  }
  
  epicness() {
    return "VERY EPIC";
  }
}

Scratch.extensions.register(new EpicExtension());
