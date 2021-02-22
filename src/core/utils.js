export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getRange(start, end) {
  if (start > end) {
    [end, start] = [start, end];
  }

  const len = end - start + 1;
  return new Array(len)
      .fill('')
      .map((_, i) => i);
}
