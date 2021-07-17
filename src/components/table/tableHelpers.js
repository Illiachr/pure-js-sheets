import {getRange} from '@core/utils';

export function isResizable(event) {
  return event.target.dataset.resize;
}

export function isCell(event) {
  return event.target.dataset.type === 'cell';
}

export function matrix($current, $target) {
  const target = $target.id(true);
  const current = $current.id(true);
  const cols = getRange(current.col, target.col);
  const rows = getRange(current.row, target.row);
  console.log(cols);
  console.log(rows);
  return cols.reduce((acc, col) => {
    rows.forEach(row => acc.push(`${row}:${col}`));
    return acc;
  }, []);
}
