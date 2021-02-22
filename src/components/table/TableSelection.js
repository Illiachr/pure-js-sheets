export default class TableSelection {
  static className = 'selected';
  constructor() {
    this.$group = [];
    this.current = null;
  }

  select($el) {
    this.clear();
    this.current = $el;
    this.$group.push(this.current);
    this.current.addClass(TableSelection.className);
  }

  selectGroup($group) {
    this.clear();
    this.$group = $group;
    this.$group.forEach($el => $el.addClass(TableSelection.className));
  }

  clear() {
    this.$group.forEach($el => $el.rmClass(TableSelection.className));
    this.$group = [];
  }
}
