const splitter = function (text, width) {
  const lines = text.split('\n');
  const split = lines.map((line) => {
    const word = /\S+/g;
    const subLines = [];
    let subLineIndex = 0;
    let currentLine = '';
    let result;
    while ((result = word.exec(line)) !== null) {
      if (word.lastIndex / width > subLineIndex) {
        subLineIndex = Math.floor(word.lastIndex / width);
      }
    }
    return line;
  });
};

export default splitter;