class EpicExtension {
  getInfo() {
    return {
      id: "vercteepicextension",
      name: "Epic Extension",
      blocks: [
        {
          opcode: "epicness",
          blockType: Scratch.BlockType.REPORTER,
          text: "epicness"
        }
      ]
    }
  }
  
  epicness() {
    return "VERY EPIC";
  }
}

Scratch.extensions.register(new EpicExtension());
