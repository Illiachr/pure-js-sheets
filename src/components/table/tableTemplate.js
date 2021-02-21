const CODE = {
  A: 65,
  Z: 90,
};

function toCell(_, index) {
  return `<div class="cell" data-col="${index}" contenteditable></div>`;
}

function toCol(col, index) {
  return `
          <div class="table-column" data-col="${index}" data-type="resizable">
            ${col}
            <div class="col-resize" data-resize="col"></div>
          </div>
        `;
}

function createRow(content, index = null) {
  const resize = index
                ? `<div 
                      class="row-resize" data-resize="row"
                    ></div>`
                : '';
  return `
    <div class="table-row" data-row="${index}" data-type="resizable">
      <div class="table-row-info">
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="row-data" data-row="${index}">
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
