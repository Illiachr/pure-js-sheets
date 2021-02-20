const CODE = {
  A: 65,
  Z: 90,
};

function toCell() {
  return `<div class="cell" contenteditable></div>`;
}

function toCol(col) {
  return `
          <div class="table-column">
            ${col}
            <div class="col-resize" data-resize="col"></div>
          </div>
        `;
}

function createRow(content, info = null) {
  const resize = info
                ? `<div class="row-resize" data-resize="row"></div>`
                : '';
  return `
    <div class="table-row">
      <div class="table-row-info">
        ${info ? info : ''}
        ${resize}
      </div>
      <div class="row-data">
        ${content}
      </div>
    </div>
  `;
}

const toChar= (_, index) => {
  return String.fromCharCode(CODE.A + index);
};

export function createTable(rowNum = 20) {
  const colCount = CODE.Z - CODE.A + 1;
  const rows = [];
  const cols = new Array(colCount)
      .fill('')
      .map(toChar)
      .map(toCol)
      .join('');
  rows.push(createRow(cols));
  for (let i = 1; i <= rowNum; i++) {
    const cells = new Array(colCount)
        .fill('')
        .map(toCell)
        .join('');
    rows.push(createRow(cells, i));
  }

  return rows.join('');
}
