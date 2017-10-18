function createSlice (text, style) {
  return {
    text,
    style: `highlight-${style}` || null
  };
};

const styler = function (text) {
  const spanRegex = /\[(.+?)\](\d)/g;
  let lastIndex = 0;
  const slices = [];

  let exec = spanRegex.exec(text);
  while (exec !== null) {
    if (exec.index > lastIndex) {
      slices.push(createSlice(text.substring(lastIndex, exec.index)));
    }
    slices.push(createSlice(exec[1], exec[2]));
    lastIndex = exec.index + exec[0].length;

    exec = spanRegex.exec(text);
  }
  if (lastIndex < text.length) {
    slices.push(createSlice(text.substring(lastIndex, text.length)));
  }

  return slices;
};

export default styler;
