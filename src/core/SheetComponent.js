import DomListener from '@core/DomListener';

export default class SheetComponent extends DomListener {
  constructor($root, options) {
    super($root);
  }

  /* Returns component template*/
  toHTML() {
    return '';
  }
}
