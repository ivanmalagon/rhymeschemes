import styler from './styler';

const spanner = function (line) {
  const markers = ['`', '^', '*'];
  let text = line;
  let spans = [
    {
      tick: 1,
      index: 0
    }
  ];
  let index = 0;

  markers.forEach(function (marker, position) {
    const tick = position + 2;
    const markerIndex = line.indexOf(marker, index);
    if (markerIndex > -1) {
      const span = {
        tick: tick,
        index: markerIndex,
        start: markerIndex + marker.length
      };
      markerIndex > 0
        ? spans.push(span)
        : spans[0] = span
      index = markerIndex;
    }
  });

  spans.forEach(function (span, idx) {
    const nextSpan = spans[idx + 1]
      ? spans[idx + 1]
      : null;

    span.text = nextSpan
      ? line.substring(span.start, nextSpan.index)
      : line.substring(span.start);
      span.slices = styler(span.text);

    delete span.start;
    delete span.index;
  });

  return spans;
};

export default spanner;
