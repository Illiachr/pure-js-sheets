import SheetComponent from '@core/SheetComponent';
import {resizeHandler} from './tableResize';
import {isCell, isResizable, matrix} from './tableHelpers';
import TableSelection from './TableSelection';
import {createTable} from './tableTemplate';
import {$} from '@core/dom';

export default class Table extends SheetComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: Table,
      listeners: ['mousedown', 'keydown'],
    });
  }

  prepare() {
    this.tableSelection = new TableSelection();
  }

  init() {
    super.init();
    const $cell = this.$root.find('[data-id="0:0"]');
    this.tableSelection.select($cell);
  }

  toHTML() {
    return createTable();
  }

  onMousedown(event) {
    if (isCell(event)) {
      const $cell = $(event.target);
      if (event.shiftKey) {
        // group selection

        const cellSelect = matrix(this.tableSelection.current, $(event.target))
            .map(id => this.$root.find(`[data-id="${id}"]`));
        this.tableSelection.selectGroup(cellSelect);
      } else {
        // single selection
        this.tableSelection.select($cell);
      }
    }
    if (isResizable(event)) {
      resizeHandler(this.$root, event.target);
    }
  }

  onKeydown(event) {
    event.preventDefault();
    if (isCell(event)) {
      const {keyCode} = event;
      const currCell = $(event.target);
      const id = currCell.id(true);
      let currRow = id.row;
      let currCol = id.col;

      switch (keyCode) {
        case (keyCode === 13 || keyCode === 40):
          console.log('go next down');
          break;
      }

      if (keyCode === 13 || keyCode === 40) {
        currRow += 1;
      }

      if (keyCode === 38) {
        console.log('go next up');

        currRow -= 1;
      }

      if (keyCode === 9 || keyCode === 39) {
        console.log('go next right');
        currCol += 1;
      }

      if (keyCode === 37) {
        console.log('go next left');
        currCol -= 1;
      }

      const $targetCell = this.$root
          .find(`[data-id="${currRow}:${currCol}"]`);
      if ($targetCell.$el) {
        this.tableSelection.select($targetCell);
      }
    }
  }
}


// 680 ms  Scripting
// 608 ms  Rendering

// 149 ms  Scripting
// 394 ms  Rendering
