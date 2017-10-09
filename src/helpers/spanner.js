import styler from './styler';

const spanner = function (line) {
  const maxTick = 8;
  let text = line;
  let spans = [
    {
      tick: 1,
      index: 0
    }
  ];
  let index = 0;
  let maxToken = 1;
  for (let i = 2; i <= maxTick; i++) {
    const token = `*${i}`;
    const tokenIndex = line.indexOf(token, index);
    if (tokenIndex > -1) {
      spans[i - 1] = {
        tick: i,
        index: tokenIndex,
        start: tokenIndex + token.length
      }
      index = tokenIndex;
      maxToken = i;
    }
  }
  for (let i = 1; i <= maxToken; i++) {
    let found = false;
    const nextToken = i === maxToken
      ? maxToken
      : i + 1;
    if (spans[i - 1]) {
      for (let j = nextToken; j <= maxToken && !found; j++) {
        if (spans[j - 1]) {
          found = true;
          spans[i - 1].text = i === maxToken
            ? line.substring(spans[i - 1].start)
            : line.substring(spans[i - 1].start, spans[j - 1].index);
          spans[i - 1].slices = styler(spans[i - 1].text);
        }
      }
    }
  }
  return spans;
};

export default spanner;
