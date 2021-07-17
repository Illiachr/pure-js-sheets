import SheetComponent from '@core/SheetComponent';
import {resizeHandler} from './tableResize';
import {isCell, isResizable, matrix} from './tableHelpers';
import TableSelection from './TableSelection';
import {createTable} from './tableTemplate';
import {$} from '@core/dom';
import {nextSelector} from '@core/utils';

export default class Table extends SheetComponent {
  static className = 'excel__table';

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options
    });
  }

  prepare() {
    this.tableSelection = new TableSelection();
  }

  init() {
    super.init();
    this.selectCell(this.$root.find('[data-id="0:0"]'));
    this.$on('formula:input', text => {
      this.tableSelection.current.text(text);
    });
    this.$on('formula:end', () => {
      this.tableSelection.current.focus();
    });
  }

  toHTML() {
    return createTable();
  }

  selectCell($cell) {
    this.tableSelection.select($cell);
    this.$emit('cell:next', $cell);
  }

  onInput(e) {
    // const text = this.tableSelection.current.text();
    this.$emit('cell:input', $(e.target));
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
        this.$emit('cell:next', $cell);
      }
    }
    if (isResizable(event)) {
      resizeHandler(this.$root, event.target);
    }
  }

  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
    ];

    const {key, shiftKey} = event;

    if (keys.includes(key) && !shiftKey) {
      event.preventDefault();

      const id = this.tableSelection.current.id(true);
      const $targetCell = this.$root.find(nextSelector(key, id));

      if ($targetCell.$el) {
        this.selectCell($targetCell);
      }
    }
  }
} // class Table

// 680 ms  Scripting
// 608 ms  Rendering

// 149 ms  Scripting
// 394 ms  Rendering
