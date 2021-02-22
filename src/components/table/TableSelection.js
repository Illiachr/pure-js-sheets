export default class TableSelection {
  static className = 'selected';
  constructor() {
    this.$group = [];
  }

  select($el) {
    this.clear();
    this.$group.push($el);
    $el.addClass(TableSelection.className);
  }

  selectGroup() {

  }

  clear() {
    this.$group.forEach($el => $el.rmClass(TableSelection.className));
    this.$group = [];
  }
}
