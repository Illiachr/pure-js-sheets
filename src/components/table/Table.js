import SheetComponent from '@core/SheetComponent';

export default class Table extends SheetComponent {
  static className = 'excel__table';

  toHTML() {
    return `
      <div class="table-row">
        <div class="table-row-info"></div>
        <div class="row-data">
          <div class="table-column">A</div>
          <div class="table-column">B</div>
          <div class="table-column">C</div>
        </div>
      </div>
      <div class="table-row">
        <div class="table-row-info">1</div>
        <div class="row-data">
          <div class="cell selected" contenteditable="true">A1</div>
          <div class="cell" contenteditable="true">B1</div>
          <div class="cell" contenteditable="true">C1</div>
        </div>
      </div>
      <div class="table-row">
        <div class="table-row-info">2</div>
        <div class="row-data">
          <div class="cell" contenteditable="true">A2</div>
          <div class="cell" contenteditable="true">B2</div>
          <div class="cell" contenteditable="true">C2</div>
        </div>
      </div>
    `;
  }
}
