class EpicExtension {
  getInfo() {
    this.dictionaries = {}
    return {
      id: "vercte-dictionaries",
      name: "Dictionaries",
      blocks: [
        {
          opcode: "getDictValue",
          blockType: Scratch.BlockType.REPORTER,
          text: "Get key [VAL] of [DICT]",
          arguments: {
            DICT: {type: Scratch.ArgumentType.STRING, defaultValue: "foo"},
            VAL:  {type: Scratch.ArgumentType.STRING, defaultValue: "bar"}
          }
        }
      ]
    }
  }
  
  getDictValue(args) {
    return this.dictionaries[args.DICT]?.[args.VAL];
  }
}

Scratch.extensions.register(new EpicExtension());
